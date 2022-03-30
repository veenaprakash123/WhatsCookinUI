import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import MealList from './MealList'


const RecipeFinder = ({ingredients, recipesData, setRecipesData}) => {

    // const url = 'https://api.spoonacular.com/food/ingredients/butter'

    // const[items, setItems] = useState([])
    // const[recipeData, setRecipeData] = useState([])


    function handleChange(e) {
        // console.log(e.target.value)
        ingredientNames = e.target.value
        // console.log(ingredientNames)
    }


    function getOnlineRecipes(){
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=5d0b0736e8d24604ba71a7ac99a5571b&ingredients=${ingredientNames}`

        )
        .then((response) => response.json())
        .then((data) => {
            setRecipesData(data)
            console.log(data)
        })
        .catch(()=> {
            console.log('error');
        })

    }
  

    let ingredientNames = ingredients? ingredients.map((ingredient)=> {
        return(
            ingredient.name
        )
    }) : null


  return (
    <div>
        <input type="text" placeholder='Ex: egg' defaultValue={ingredientNames} onChange={handleChange} style={{width: '40rem', height: '10rem'}}></input>
       
        <button onClick={getOnlineRecipes}>Find Recipe</button>

        {recipesData && <MealList recipeData={recipesData}/>}
        
    </div>
  )
}

export default RecipeFinder