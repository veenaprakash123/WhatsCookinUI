import React from 'react'
import { useState } from 'react'
import FinalOnlineRecFields from './FinalOnlineRecFields'

const OnlineRecipeFields = ({ingredientString, ingredientsNew, setIngredientsNew}) => {


    // let onlineIngredients = ingredientString? ingredientString.map((ing) => {

    //     setIngredientsNew(ingredientsNew=>[...ingredientsNew, {ingredient: `${ing.name}`}])

    // }):null 

    // let ingredients = ingredientsNew? ingredientsNew.map((ing)=>{
    //     return(
    //         {ingredient: ing.name}
    //     )
    // }): null


  return (
    <div>

        
        {ingredientString, setIngredientsNew && <FinalOnlineRecFields setIngredientsNew={setIngredientsNew} ingredientsNew={ingredientsNew}/> }
     
        
       </div>
  )
}

export default OnlineRecipeFields