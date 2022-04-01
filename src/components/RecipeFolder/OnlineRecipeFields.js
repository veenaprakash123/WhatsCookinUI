import React from 'react'
import { useState } from 'react'
import FinalOnlineRecFields from './FinalOnlineRecFields'

const OnlineRecipeFields = ({ingredientString, ingredientsNew, setIngredientsNew}) => {


    // let onlineIngredients = ingredientString? ingredientString.map((ing) => {

    //     setIngredientsNew(...ingredientsNew, {ingredient: `${ing.name}`})

    // }):null 

    let ingredients = ingredientString? ingredientString.map((ing)=>{
        return(
            {ingredient: ing.name}
        )
    }): null

console.log(ingredients, ingredientString)

  return (
    <div>

        
        {ingredientString && <FinalOnlineRecFields ingredientsNew={ingredients}/> }
     
        
       </div>
  )
}

export default OnlineRecipeFields