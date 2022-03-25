import React from 'react'
import { useState, useEffect} from 'react'
import {  useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Card} from 'react-bootstrap'

const EditRecipe = ({ingredients, setIngredients}) => {

    const [recipe, setRecipe] = useState({})

    let {id} = useParams()
    let navigate = useNavigate()

    useEffect(()=> {
        const editDetails = async() => {
          let  recipeResponse = await fetch('http://localhost:4000/recipe/' + id) 
          let json = await recipeResponse.json()
          console.log(json)
          setRecipe(json)
        }
        editDetails()
        console.log(recipe)
        setIngredients(recipe.ingredients)
        console.log(ingredients)
      }, [id])

    // const handleIngredientAdd = () => {
    //     const [ingredientList, setIngredientList] = useState([recipe.ingredients])
    //     ([...ingredientsList, {ingredient: ""}])
    // }

    let handleSubmit = () => {
        console.log('Submitting!')
    }

    // let displayIngredients = ingredients? 
    //     ingredients.map((ing, index) => {
    //         return(
    //             <div key={index}  className="ingredients">
    //                         <div className='first-division'>
    //                             <input name='ingredient' type='text' id='ingredient' /> 
    //                         </div>
    //                         <div className='second-division'>
    //                         {ingredients.length > 1 && 
    //                             <button type='button' className='remove-btn' value= {ing.ingredient} >
    //                                 <span>Remove</span>
    //                             </button>
    //                         }
    //                         </div>
    //                     </div>
    //         )
    //     }): null
    

  return (
    <div>
        <Card>
        <form className='App' autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-field'>
                <label htmlFor='meal'>Meal</label>
                <input name='meal' type='text' id='meal' value ={recipe.meal} />
            </div>


            <div className='form-field'>

                <label htmlFor='ingredient'>Ingredients</label>
                
                {/* {displayIngredients} */}

                <button type="button" className='add-btn'>
                    <span>Add Ingredient to Recipe</span>
                </button>

            </div>
           
            <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' value={recipe.instructions}/>
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

export default EditRecipe