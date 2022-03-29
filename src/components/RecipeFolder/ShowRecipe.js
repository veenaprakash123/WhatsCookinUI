import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams, Link} from 'react-router-dom'
import {Button, Card, ListGroup} from 'react-bootstrap'


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
            <li key={ingredient._key}>{ingredient.ingredient}</li>
        )
    }) : null
        

    // function removeTags(str) {
    //     if ((str===null) || (str===''))
    //         return false;
    //     else
    //         str = str.toString();
    //     return str.replace( /(<([^>]+)>)/ig, ' ')
  
    //   }
    
    // const displayInstructions = removeTags(recipe.instructions)

  return (

    <div>
        <div style={{backgroundColor: 'brown'}}>
          <h1 className='main-header'>Recipe Details</h1>
          <Button variant="dark" style={{marginTop: 30}}>
            <Link to='/recipebook' style={{ color:'white', textDecoration: 'none' }}>
              Return to Recipes
            </Link>
          </Button>
        </div>

        <div className='recipe-card'>

            <div key={recipe._id}>
                <h1 style={{marginTop:'20%', textDecoration: 'underline'}}>{recipe.meal}</h1>

                <div style={{marginTop:'15%'}}>
                  <h3>Ingredients:</h3>
                  <ul>
                    {displayRecipe}
                  </ul>
                </div>

                <div style={{marginTop:'10%'}}>
                  <h3>Instructions:</h3>
                  <p>{recipe.instructions}</p>
                </div>

            </div>
     
        </div>
    </div>
  )
}

export default ShowRecipe