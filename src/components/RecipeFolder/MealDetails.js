import React from 'react'
import { useState, useEffect } from 'react'

const MealDetails = ({recipe, key}) => {

    const[imageUrl, setImageUrl] = useState('')


    // useEffect(()=> {
    //     fetch(
    //         `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=3f66c12e8a4246909d9c82ce222efef4&includeNutrition=false`
    //     )
    //     .then((respose)=> Response.json())
    //     .then((data)=> {
    //         setImageUrl(data.image)
    //     })
    //     .catch(()=>{
    //         console.log("error")
    //     })
    // }, [recipe.id])



  return (
    <div>
        {/* <img src={imageUrl} alt='recipe'> </img> */}
        <h2>Meal Image</h2>
        <img src={recipe.image} alt='recipe'></img>

    </div>
  )
}

export default MealDetails