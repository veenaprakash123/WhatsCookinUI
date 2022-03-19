import React from 'react'
import {Link , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Kitchen from './components/Kitchen'
import RecipeBook from './components/RecipeBook'
import NewIngredient from './components/NewIngredient';



const App = () => {

  const[recipes, setRecipes]= useState([]);
  const[recipe, setRecipe] = useState('');
  const[ingredients, setIngredients] = useState([]);
  const[ingredient, setIngredient] = useState('');


  let getIngredients = async() => {
    console.log('yes')
    let data = await fetch('http://localhost:4000/kitchen')
    let json = await data.json()
    console.log(json)
    setIngredients(json)
  }

  let getRecipes = async() => {
    console.log('yes')
    let recipeData = await fetch('http://localhost:4000/recipe')
    let recipeJson = await recipeData.json()
    console.log(recipeJson)
    setRecipes(recipeJson)
  }

  useEffect(() => {
    getIngredients();
    getRecipes();
  }, []);

  let getIngredient = (ingredient) => {
    setIngredient(ingredient)
  }

  let addIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient])
  }



  return (
    <div>App
        <main>
            <Routes>
                {/* <Route path='/welcome' element={<Welcome/>} ></Route> */}
                <Route path='/session/login' element={<Login/>} ></Route>
                <Route path='/session/register' element={<Register/>} ></Route>
                <Route path='/kitchen' element={<Kitchen ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients}/>} ></Route>
                <Route path='/recipe' element={<RecipeBook recipe={recipe} recipes={recipes} setRecipe={setRecipe} setRecipes={setRecipes}/>} ></Route> 
                <Route path='/newingredient' element={<NewIngredient addIngredient={addIngredient} ingredient={ingredient} ingredients={ingredients}/>}></Route>

            </Routes>
        </main>

    

    </div>
  )
}

export default App