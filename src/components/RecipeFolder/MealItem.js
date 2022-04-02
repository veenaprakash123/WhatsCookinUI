import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const MealItem = ({meal}) => {
    const[imageUrl, setImageUrl] = useState("")

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
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
        <Link to={`/addonlinerecipe/${meal.id}`}><h1>{meal.title}</h1></Link>
        <img src={imageUrl} alt="recipe"></img>



    </div>
  )
}

export default MealItem