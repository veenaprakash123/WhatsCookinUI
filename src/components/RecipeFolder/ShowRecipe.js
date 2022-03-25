import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const ShowRecipe = ({recipe, setRecipe}) => {

    let {id} = useParams()
    let navigate= useNavigate()

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
            <h3 key={ingredient._key}>{ingredient.ingredient}</h3>
        )
    }) : null
        


  return (

    <div>
        <Button >
        <Link to='/recipebook' style={{ color:'white', textDecoration: 'none' }}>
            Return to Recipes
          </Link>
        </Button>
        <div key={recipe._id}>
            <h1>{recipe.meal}</h1>
            {displayRecipe}
            <p>{recipe.instructions}</p>
        </div>
    </div>
  )
}

export default ShowRecipe