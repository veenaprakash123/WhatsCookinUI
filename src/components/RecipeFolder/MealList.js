import React, { useEffect } from 'react'
import { useState} from 'react'
import MealDetails from './MealDetails'
import {Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'


const MealList = ({recipeData, onlineRecipe, setOnlineRecipe}) => {




    let displayMeals = recipeData && recipeData.map((recipe) => {
        return(
            <div key={recipe.id}>
            <Card>
            <div>
                <Link to={`/mealdetails/${recipe.id}`}><h3>{recipe.title}</h3></Link>
                <img src={recipe.image} alt='recipe'></img>
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