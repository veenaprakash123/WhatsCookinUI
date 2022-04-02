import React from 'react'
import {Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Matchlist from './Matchlist'

const ReadyToGo = ({recipes, ingredients, recipeMatches, setRecipeMatches}) => {



function getMyRecipes() {

    for ( var i=0 ; i < recipes.length; i++){
     
      let recipeIngredients = recipes[i].ingredients
  
      let matches = 0
  
      let matchesNeeded = recipes[i].ingredients.length
  
      for (var j=0 ; j < recipeIngredients.length; j++){
  
          for(var k=0 ; k < ingredients.length; k++){
              if(recipeIngredients[j].ingredient === ingredients[k].name){
                  matches = matches + 1;
              }
          }
      }
     
      if (matches === matchesNeeded){
          console.log(recipes[i].meal)
          setRecipeMatches([...recipeMatches, recipes[i]])
       
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