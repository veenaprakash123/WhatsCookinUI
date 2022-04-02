import React, { useEffect, useState } from 'react'
import MealDetails from './MealDetails'
import {Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import MealItem from './MealItem'



const MealList = ({recipeData, onlineRecipe, setOnlineRecipe}) => {




return (
    <div style={{backgroundColor:'#fff8dc'}}>
        <div>MealList</div>
       {recipeData.map((meal) => {
           return <MealItem key={meal.id} meal={meal}/>
       })
       }
    </div>
  )



}

export default MealList