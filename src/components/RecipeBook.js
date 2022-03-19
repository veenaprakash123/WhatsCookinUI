import React from 'react'
import {Button} from 'react-bootstrap'

const RecipeBook = ({recipe, recipes, setRecipe, setRecipes}) => {

  const displayRecipes = recipes? recipes.map((recipe) => {
    return(
        <div>
        <h1>{recipe.meal}</h1>
        {/* <h2>{recipe.ingredients}</h2> */}
        {/* <img>{ingredient.image}</img> */}
        </div>
    )
  }): null 


  return (
    <div>
        <h1>RecipeBook</h1>
        {displayRecipes}

        <Button>Add Recipe</Button>

    </div>
  )
}

export default RecipeBook