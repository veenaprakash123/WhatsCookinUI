import React, { useEffect, useState } from 'react'
import MealDetails from './MealDetails'
import {Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'


const MealList = ({recipeData, onlineRecipe, setOnlineRecipe}) => {

    const[imageUrl, setImageUrl]= useState("")

    // useEffect(()=>{
    //     fetch(
    //         `https://api.spoonacular.com/recipes/${recipeData.id}/information?apiKey=3f66c12e8a4246909d9c82ce222efef4&includeNutrition=false`
    //     )
    //     .then((response)=> response.json())
    //     .then((data)=>{
    //         setImageUrl(data.image)
    //     })
    //     .catch(()=>{
    //         console.log('error')
    //     })
    // })



    let displayMeals = recipeData && recipeData.map((recipe) => {
        return(
            <div key={recipe.id}>
            <Card>
            <div>
                <Link to={`/mealdetails/${recipe.id}`}><h3>{recipe.title}</h3></Link>
                <img src={imageUrl} alt='recipe'></img>
            </div>
            </Card>
            </div>
        )
    }) 



return (
    <div>
        <div>MealList</div>
        {displayMeals}
    </div>
  )



}

export default MealList