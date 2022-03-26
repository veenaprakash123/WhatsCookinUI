import React from 'react'

const MealList = ({recipeData}) => {

    let displayMeals = recipeData? recipeData.map((recipe) => {
        return(
            <div>
                <h3>{recipe.title}</h3>
            </div>
        )
    }) : null



return (
    <div>
    <div>MealList</div>
    {displayMeals}

    </div>
  )



}

export default MealList