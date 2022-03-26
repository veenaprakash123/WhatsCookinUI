import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import MealList from './MealList'


const RecipeFinder = ({ingredients}) => {

    // const url = 'https://api.spoonacular.com/food/ingredients/butter'

    // const[items, setItems] = useState([])
    const[recipeData, setRecipeData] = useState([])


    function handleChange(e) {
        console.log(e.target.value)
        ingredientNames = e.target.value
        console.log(ingredientNames)
    }


    function getRecipes(){
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=3f66c12e8a4246909d9c82ce222efef4&ingredients=${ingredientNames}`

        )
        .then((response) => response.json())
        .then((data) => {
            setRecipeData(data)
            console.log(data)
        })
        .catch(()=> {
            console.log("error");
        })

    }
  
    // const getIngredientNames = () => ingredients.map((ingredient)=> setItems(...items, ingredient.name).join(','))
    
    // console.log(items)
    // console.log(ingredients)


    // useEffect(()=> {




    //     getIngredientNames()
    //     console.log(items)
    // }, [])



    // useEffect(()=> {
    //     const editDetails = async() => {
    //       let  ingredientResponse = await fetch('http://localhost:4000/kitchen/details/' + id) 
    //       let json = await ingredientResponse.json()
    //       console.log(json)
    //       setIngredient(json)
    //     }
    //     editDetails()
    //     console.log(ingredient)
    //   }, [id])



    let ingredientNames = ingredients? ingredients.map((ingredient)=> {
        return(
            ingredient.name
        )
    }) : null


  return (
    <div>
        <input type="text" placeholder='Ex: egg' defaultValue={ingredientNames} onChange={handleChange}></input>
       
        <button onClick={getRecipes}>Find Recipe</button>

        {recipeData && <MealList recipeData={recipeData}/>}
        
    </div>
  )
}

export default RecipeFinder