import React from 'react'
import {Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'

const ReadyToGo = ({getRecipes, getIngredients}) => {

  const [recipes, setRecipes] = useState([])

  const[ingredients, setIngredients]= useState([])


  function getMyRecipes() {

    for ( var i=0 ; i < recipes.length; i++){

      let recipeIngredients = recipes[i].ingredients
  
      let matches = 0
  
      let matchesNeeded = recipes[i].ingredients.length
  
      for (var j=0 ; j < recipeIngredients.length; j++){
  
          for(var k=0 ; k < ingredients.length; k++){
  
              if(recipeIngredients[j].ingredient === ingredients[k]){
                  matches = matches + 1;
              }
          }
      }
      if (matches === matchesNeeded){
          console.log(recipes[i].meal)
          return(
              <div key={recipes[i].id}> 
                  {recipes[i].meal}
              </div>
          )
        } console.log('oops')
    }
  }


  function handleClick () {
    console.log('Hi!')
  }



  return (
      
    <div>
      <Button onClick={getMyRecipes}>Recipes at my finger tips!</Button>
    </div>
  )
}

export default ReadyToGo