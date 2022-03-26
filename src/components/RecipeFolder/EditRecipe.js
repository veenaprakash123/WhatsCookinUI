import React from 'react'
import { useState, useEffect} from 'react'
import {  useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Card} from 'react-bootstrap'

const EditRecipe = () => {

    const [recipe, setRecipe] = useState({})

    const [meal, setMeal] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState('')

    let {id} = useParams()
    let navigate = useNavigate()

    // function mealName(mealName){
    //     setMeal(mealName.meal)
    // }

    // const editDetails = async() => {
    //     let  recipeResponse = await fetch('http://localhost:4000/recipe/' + id) 
    //     let json = await recipeResponse.json()
    //     console.log(json)
    //     setRecipe(json)

      

    useEffect(()=> {
        const editDetails = async() => {
          let  recipeResponse = await fetch('http://localhost:4000/recipe/' + id) 
          let json = await recipeResponse.json()
          console.log(json)
          setRecipe(json)
          setMeal(json.meal)
          setIngredients(json.ingredients)
          setInstructions(json.instructions)
        }
        editDetails()
      }, [id])




    const handleIngredientAdd = () => {
        setIngredients([...ingredients, {ingredient: ""}])
    }


    let handleSubmit = () => {
        console.log('Submitting!')
    }

    let displayIngredients = ingredients? 
        ingredients.map((ing, index) => {
            return(
                <div key={index}  className="ingredients">
                    <div className='first-division'>
                        <input name='ingredient' type='text' defaultValue={ing.ingredient}/> 
                    </div>
                    <div className='second-division'>
                        {recipe.ingredients.length > 1 && 
                            <button type='button' className='remove-btn' value={ing.ingredient} >
                                <span>Remove</span>
                            </button>
                        }
                    </div>
                </div>
            )
        }): null
    

  return (
    <div>
        <Card>
        <form className='App' autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-field'>
                <label htmlFor='meal'>Meal</label>
                <input name='meal' type='text' id='meal' defaultValue ={recipe.meal} />
            </div>


            <div className='form-field'>

                <label htmlFor='ingredient'>Ingredients</label>
                
                {displayIngredients}

                <button type="button" className='add-btn' onClick={handleIngredientAdd}>
                    <span>Add Ingredient to Recipe</span>
                </button>

            </div>
           
            <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' defaultValue={recipe.instructions}/>
            </div>

            <div>
                <button>
                    <span>Edit Recipe</span>
                </button>
            </div>
        </form>
        </Card>
    </div>
  )
}

export default EditRecipe