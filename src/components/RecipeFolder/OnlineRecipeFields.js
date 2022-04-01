import React from 'react'
import { useState } from 'react'
import FinalOnlineRecFields from './FinalOnlineRecFields'

const OnlineRecipeFields = ({ingredientString, ingredientsNew, setIngredientsNew}) => {


    let onlineIngredients = ingredientString? ingredientString.map((ing) => {

        setIngredientsNew(...ingredientsNew, {ingredient: `${ing.name}`})

    }):null 




  return (
    <div>

        
        {ingredientsNew && <FinalOnlineRecFields ingredientsNew={ingredientsNew}/> }
     
        
       </div>
  )
}

export default OnlineRecipeFields