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
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=3f66c12e8a4246909d9c82ce222efef4&ingredients=${ingredientNames}`

        )
        .then((response) => response.json())
        .then((data) => {
            setRecipesData(data)
            console.log(data)
        })
        .catch(()=> {
            console.log("error");
        })

    }
  

    let ingredientNames = ingredients? ingredients.map((ingredient)=> {
        return(
            ingredient.name
        )
    }) : null


  return (
    <div>
        <input type="text" placeholder='Ex: egg' defaultValue={ingredientNames} onChange={handleChange}></input>
       
        <button onClick={getOnlineRecipes}>Find Recipe</button>

        {recipesData && <MealList recipeData={recipesData}/>}
        
    </div>
  )
}

export default RecipeFinder