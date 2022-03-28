import React from 'react'

const Matchlist = ({recipeMatches, setRecipeMatches}) => {

    let displayMatches = recipeMatches? recipeMatches.map((recipe)=>{

        return(
            <div key={recipe._id}>
                <h3>{recipe.meal}</h3>
            </div>
        )


    }) : null 



  return (
    <div>
        {displayMatches}
    </div>
  )
}

export default Matchlist