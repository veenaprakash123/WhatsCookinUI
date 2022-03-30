import React, { useEffect, useState } from 'react'
import MealDetails from './MealDetails'
import {Card} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import MealItem from './MealItem'



const MealList = ({recipeData, onlineRecipe, setOnlineRecipe}) => {

    // const[imageUrl, setImageUrl]= useState("")



    // let displayMeals = recipeData && recipeData.map((recipe) => {
    //     return(
    //         <div key={recipe.id}>
    //         <Card>
    //         <div>
    //             <Link to={`/mealdetails/${recipe.id}`}><h3>{recipe.title}</h3></Link>
    //             <img src={imageUrl} alt='recipe'></img>
    //         </div>
    //         </Card>
    //         </div>
    //     )
    // }) 



return (
    <div>
        <div>MealList</div>
       {recipeData.map((meal) => {
           return <MealItem key={meal.id} meal={meal}/>
       })
       }
    </div>
  )



}

export default MealList