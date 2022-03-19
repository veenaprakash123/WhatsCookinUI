import React from 'react'

const Kitchen = (ingredient, ingredients, setIngredient, setIngredients) => {

  const displayIngredients =  ingredients.map((ingredient) => {
    return(
        <div>
        <h1>{ingredient.name}</h1>
        {/* <img>{ingredient.image}</img> */}
        </div>
    )
  })

  return (
    <div>
        <h1>Kitchen</h1>
        {displayIngredients}
    </div>

  )
}

export default Kitchen