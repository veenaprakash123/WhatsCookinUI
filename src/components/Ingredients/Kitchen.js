import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Kitchen = ({ingredient, ingredients, setIngredient, setIngredients}) => {

 
  const displayIngredients =  ingredients? ingredients.map((ingredient) => {
    return(
        <div>
        <h1>{ingredient.name}</h1>
        {/* <img>{ingredient.image}</img> */}
        </div>
    )
  }): null 

  return (
    <div>
        <h1>Kitchen</h1>
        {displayIngredients}
        <Button>
          <Link to={'/newingredient'}>Add Ingredient</Link>
        </Button>
    </div>

  )
}

export default Kitchen