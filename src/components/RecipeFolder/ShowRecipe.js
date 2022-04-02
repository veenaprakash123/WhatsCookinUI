import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams, Link} from 'react-router-dom'
import {Button, Card, ListGroup} from 'react-bootstrap'


const ShowRecipe = ({recipe, setRecipe, url}) => {

    let {id} = useParams()
    let navigate= useNavigate()

    useEffect(()=> {
    let getRecipe = async() => {
        let recipeResponse = await fetch(`${url}/recipe/` + id)
        // let recipeResponse = await fetch('http://localhost:4000/recipe/' + id)
        let json = await recipeResponse.json()
        setRecipe(json)
        }
        getRecipe()
    }, [id])

    let displayRecipe = recipe? recipe.ingredients.map((ingredient) => {
        return(
            <li key={ingredient._key}>{ingredient.ingredient}</li>
        )
    }) : null
        



  return (

    <div>
        <div className='main-header'>
          <h1>Recipe Details</h1>
          <Button variant="dark" style={{marginTop: 30}}>
            <Link to='/recipebook' style={{ color:'white', textDecoration: 'none' }}>
              Return to Recipes
            </Link>
          </Button>
        </div>

        <div className='recipe-card'>

            <div key={recipe._id}>
                <h1 style={{marginTop:'5%', textDecoration: 'underline'}}>{recipe.meal}</h1>

                <div style={{marginTop:'10%'}}>
                  <h3>Ingredients:</h3>
                  <ul>
                    {displayRecipe}
                  </ul>
                </div>

                <div style={{marginTop:'5%'}}>
                  <h3>Instructions:</h3>
                  <p>{recipe.instructions}</p>
                </div>

            </div>
     
        </div>
    </div>
  )
}

export default ShowRecipe