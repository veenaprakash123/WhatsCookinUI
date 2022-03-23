import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate} from 'react-router'


function NewRecipe({addRecipe}) {

    const [ingredientsList, setIngredientsList] = useState([ {ingredient: ""} ]);
    const [meal, setMeal] = useState('')
    const [instructions, setInstructions] = useState('')
    const [recipe, setRecipe] = useState({})

    let navigate = useNavigate()

    const handleIngredientAdd = () => {
        setIngredientsList([...ingredientsList, {ingredient: ""}])
    }

    let handleChangeMeal = (e) => {
        setMeal({...meal,[e.target.id]:e.target.value})
      }

    let handleChangeInstructions = (e) => {
        setInstructions({...instructions,[e.target.id]:e.target.value})
      }

    let handleRemove = (index) => {
        const list = [...ingredientsList];
        list.splice(index, 1);
        setIngredientsList(list)
    }



    let handleSubmit = async(e) => {

        setRecipe({
            meal: meal,
            ingredients: ingredientsList,
            instructions: instructions
        })

        e.preventDefault()
        console.log({recipe})

        let response = await fetch('http://localhost:4000/recipe', {
            method: "POST",
            body: JSON.stringify({
                recipe
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
                                <input name='ingredient' type='text' id='ingredient'/> 
                            </div>
                            <div className='second-division'>
                            {ingredientsList.length > 1 && 
                                <button type='button' className='remove-btn' onClick={handleRemove}>
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
    </div>
  )
}

export default NewRecipe