import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecipeBook = ({recipe, recipes, setRecipe, setRecipes}) => {

  const displayRecipes = recipes? recipes.map((recipe) => {
    return(
        <div>
        <Link to={`/showrecipe/${recipe._id}`}><h1>{recipe.meal}</h1></Link>
        {/* <h2>{recipe.ingredients}</h2> */}
        {/* <img>{ingredient.image}</img> */}
        </div>
    )
  }): null 


  return (
    <div>
        <h1>RecipeBook</h1>
        {displayRecipes}

        <Button>
          <Link to='/newrecipe' style={{ color:'white', textDecoration: 'none' }}>
            Add Recipe
          </Link>
        </Button>

    </div>
  )
}

export default RecipeBook