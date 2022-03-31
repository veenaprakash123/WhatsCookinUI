import React from 'react'
import {useState, useEffect} from 'react'

const MealItem = ({meal}) => {
    const[imageUrl, setImageUrl] = useState("")

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5d0b0736e8d24604ba71a7ac99a5571b&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=>{
            setImageUrl(data.image)
        })
        .catch(()=>{
            console.log('error')
        })
    })


  return (
    <div style={{backgroundColor:'#fff8dc'}}>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe"></img>



    </div>
  )
}

export default MealItem