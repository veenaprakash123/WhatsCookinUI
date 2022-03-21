import React from 'react'
import {Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'


const Kitchen = ({ingredient, ingredients, setIngredient, setIngredients}) => {

  let ingredientInFocus = (e) => {
    console.log(e.target)
  }
 
  const displayIngredients =  ingredients? ingredients.map((ingredient) => {
    return(
        <div>
        <h1>{ingredient.name}</h1>
        {/* <img>{ingredient.image}</img> */}
        <div>
          <Link to={`/editingredient/${ingredient._id}`} key={ingredient.id} onClick={ingredientInFocus} >Edit</Link>
          <Link to={`/showingredient/${ingredient._id}`} key={ingredient._id} >View</Link>
          {/* <Link>Delete</Link> */}
       </div> 
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