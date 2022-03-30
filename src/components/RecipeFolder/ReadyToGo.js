import React from 'react'
import {Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Matchlist from './Matchlist'

const ReadyToGo = ({recipes, ingredients, recipeMatches, setRecipeMatches}) => {

  // const [recipes, setRecipes] = useState([])

  // const[ingredients, setIngredients]= useState([])


function getMyRecipes() {

    for ( var i=0 ; i < recipes.length; i++){
      // console.log(recipes[i])
      // console.log(ingredients)
      let recipeIngredients = recipes[i].ingredients
  
      let matches = 0
  
      let matchesNeeded = recipes[i].ingredients.length
  
      for (var j=0 ; j < recipeIngredients.length; j++){
  
          for(var k=0 ; k < ingredients.length; k++){
              // console.log(recipeIngredients[j].ingredient, ingredients[k])
              if(recipeIngredients[j].ingredient === ingredients[k].name){
                  matches = matches + 1;
              }
          }
      }
      // console.log(matches, matchesNeeded)
      if (matches === matchesNeeded){
          console.log(recipes[i].meal)
          setRecipeMatches([...recipeMatches, recipes[i]])
          // return(
          //     <div key={recipes[i].id}> 
          //         {recipes[i].meal}
          //     </div>
          // )
        } 
    }
  }

  return (
      
    <div>
      <div>
        <h1>Ready to Go</h1>
      </div>


      <Button onClick={getMyRecipes}>Recipes at my finger tips!</Button>

      {recipeMatches && <Matchlist recipeMatches={recipeMatches}/>}

    </div>
  )
}

export default ReadyToGo