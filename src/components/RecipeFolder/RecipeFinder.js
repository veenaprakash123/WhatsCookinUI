import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import MealList from './MealList'
import '../CSS/General.css'


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
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredientNames}`

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
    <div style={{backgroundColor:'#fff8dc'}}>
        <div>
            <h1 className='main-header'>Recipe Finder</h1>
        </div>
        <div className="finder-text">
            <p>The field below is pre-populated with all of the ingredients you currently have in your kitchen! Remove or add ingredients to this field and find recipes that include all the ingredients! </p>
        </div>
        <input type="text" placeholder='Ex: egg' defaultValue={ingredientNames} onChange={handleChange} style={{width: '40rem', height: '10rem'}}></input>
       
        <button onClick={getOnlineRecipes}>Find Recipe</button>

        {recipesData && <MealList recipeData={recipesData}/>}
        
    </div>
  )
}

export default RecipeFinder