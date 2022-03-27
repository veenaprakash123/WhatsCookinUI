import React, { useEffect } from 'react'
import { useState} from 'react'
import MealDetails from './MealDetails'
import {Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'


const MealList = ({recipeData}) => {




    let displayMeals = recipeData && recipeData.map((recipe) => {
        return(
            <Card>
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt='recipe'></img>
            </div>
            </Card>
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