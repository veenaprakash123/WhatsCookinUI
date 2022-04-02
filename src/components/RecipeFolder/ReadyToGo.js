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
      
    <div style={{backgroundColor: '#fff8dc', height:'700px'}}>
      <div className='main-header'>
        <h1>Ready to Go</h1>
      </div>

      <div style={{marginTop:'7%', marginLeft:'5%', marginRight:'3%'}}>
        <p>Click the link below to find meals from your Recipe Book that you can make with the ingredients in your kitchen! The recipes below won't require you to purchase any more ingredients. </p>
      </div>

      <Button onClick={getMyRecipes} style={{marginLeft:'5%'}} variant="dark">Recipes at my finger tips!</Button>

      {recipeMatches && <Matchlist recipeMatches={recipeMatches}/>}

    </div>
  )
}

export default ReadyToGo