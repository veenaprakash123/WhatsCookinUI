import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate} from 'react-router'


function NewRecipe({addRecipe}) {

    const [ingredientsList, setIngredientsList] = useState([{ingredient: ""}]);
    const [meal, setMeal] = useState('')
    const [instructions, setInstructions] = useState('')
    const [recipe, setRecipe] = useState({})

    let navigate = useNavigate()

    const handleIngredientAdd = () => {
        setIngredientsList([...ingredientsList, {ingredient: ""}])
    }

    let handleChangeMeal = (e) => {
        setMeal(e.target.value)
      }

    let handleChangeInstructions = (e) => {
        setInstructions(e.target.value)
      }

    let handleChangeIngredient = (e, index) => {
        const {name, value} = e.target
        const list = [...ingredientsList]
        list[index][name] = value
        setIngredientsList(list); 
    }

    let handleRemove = (index) => {
        const list = [...ingredientsList];
        list.splice(index, 1);
        setIngredientsList(list)
    }



    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log(ingredientsList)


        let response = await fetch('http://localhost:4000/recipe', {
            method: "POST",
            body: JSON.stringify({
                meal: meal,
                ingredients: ingredientsList,
                instructions: instructions
            }), 
            headers: {
                'Content-Type':'application/json'
            }
        })
        let newRecipe = await response.json()
        console.log(newRecipe)
        addRecipe(newRecipe)
        navigate('/recipebook')
    }
    

  return (
    <div>

        <h1 className='main-header'> New Recipe </h1>

        <Card>

        <form className='App' autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-field'>
                <label htmlFor='meal'>Meal</label>
                <input name='meal' type='text' id='meal' onChange={handleChangeMeal}/>
            </div>

            <div className='form-field'>

                <label htmlFor='ingredient'>Ingredients</label>
                
                {ingredientsList.map((ing, index) => {
                    return (
    
                        <div key={index}  className="ingredients">
                            <div className='first-division'>
                                <input name='ingredient' type='text' id='ingredient' onChange={(e) => handleChangeIngredient(e, index)}/> 
                            </div>
                            <div className='second-division'>
                            {ingredientsList.length > 1 && 
                                <button type='button' className='remove-btn' value= {ing.ingredient} onClick={handleRemove}>
                                    <span>Remove</span>
                                </button>
                            }
                            </div>
                        </div>
                    )   
                    })}
                     <button type="button" className='add-btn' onClick={handleIngredientAdd}>
                         <span>Add Ingredient to Recipe</span>
                    </button>

            </div>
           
            <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' onChange={handleChangeInstructions}/>
            </div>

            <div>
                <button>
                    <span>Add Recipe</span>
                </button>
            </div>
        </form>
        </Card>
    </div>
  )
}

export default NewRecipe