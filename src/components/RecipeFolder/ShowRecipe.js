import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShowRecipe = ({recipe, setRecipe}) => {

    let {id} = useParams()

    useEffect(()=> {
    let getRecipe = async() => {
        let recipeResponse = await fetch('http://localhost:4000/recipe/' + id)
        let json = await recipeResponse.json()
        setRecipe(json)
        }
        getRecipe()
    }, [id])

    let displayRecipe = recipe? recipe.ingredients.map((ingredient) => {
        return(
            <h3>{ingredient}</h3>
        )
    }) : null
        


  return (
    <div>
        <h1>{recipe.meal}</h1>
        {displayRecipe}
        <p>{recipe.instructions}</p>
    </div>
  )
}

export default ShowRecipe