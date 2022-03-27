import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'

const MealDetails = ({onlineRecipe, setOnlineRecipe}) => {

    const[imageUrl, setImageUrl] = useState('')
    const[recipeTitle, setRecipeTitle] = useState('')
    const[recipeIngredients, setRecipeIngredients] = useState([])
    const[recipeInstructions, setRecipeInstructions] = useState('')



    let {id} = useParams()

    useEffect(()=> {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=3f66c12e8a4246909d9c82ce222efef4&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=> {
            setOnlineRecipe(data)
            console.log(data)
            setImageUrl(data.image)
            setRecipeTitle(data.title)
            setRecipeIngredients(data.extendedIngredients)
            setRecipeInstructions(data.instructions)
        })
        .catch(()=>{
            console.log("error")
        })
    }, [id])


    const displayIngredients =  recipeIngredients.map((ingredient) => {
      return(
          <div key={ingredient._id}>
           <li>{ingredient.name}</li>
          </div>
      )
    })


    function removeTags(str) {
      if ((str===null) || (str===''))
          return false;
      else
          str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, ' ')

    }

    const displayInstructions = removeTags(recipeInstructions)

  

  return (
    <div>
        {/* <img src={imageUrl} alt='recipe'> </img> */}
        <div>
          <h2>{recipeTitle}</h2>
          <img src={imageUrl} alt='recipe'></img>
        </div>
        <div>
          <h2>Ingredients:</h2>
          <ul>
            {displayIngredients}
          </ul>
        </div>
        <div>
          <h2>Instructions:</h2>
          <p>{displayInstructions}</p>

        </div>


    </div>
  )
}

export default MealDetails