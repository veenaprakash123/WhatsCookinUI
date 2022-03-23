import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Kitchen from './components/Ingredients/Kitchen'
import RecipeBook from './components/RecipeFolder/RecipeBook'
import NewIngredient from './components/Ingredients/NewIngredient';
import EditIngredient from './components/Ingredients/EditIngredient';
import ShowIngredient from './components/Ingredients/ShowIngredient';
import NewRecipe from './components/RecipeFolder/NewRecipe';
import EditRecipe from './components/RecipeFolder/EditRecipe';
import ShowRecipe from './components/RecipeFolder/ShowRecipe';




const App = () => {

  const[recipes, setRecipes]= useState([]);
  const[recipe, setRecipe] = useState('');
  const[ingredients, setIngredients] = useState([]);
  const[ingredient, setIngredient] = useState({});


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

  let addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }


  return (
    <div>App
        <main>
            <Routes>
                {/* <Route path='/welcome' element={<Welcome/>} ></Route> */}
                <Route path='/session/login' element={<Login/>} ></Route>
                <Route path='/session/register' element={<Register/>} ></Route>

                <Route path='/kitchen' element={<Kitchen ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients}/>} ></Route>
                <Route path='/newingredient' element={<NewIngredient addIngredient={addIngredient} ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients}/>}></Route>
                <Route path='editingredient/:id' element={<EditIngredient ingredient={ingredient} setIngredient={setIngredient}/>}></Route>
                <Route path='showingredient/:id' element={<ShowIngredient ingredient={ingredient} setIngredient={setIngredient}/>}></Route>

                <Route path='/recipebook' element={<RecipeBook recipe={recipe} recipes={recipes} setRecipe={setRecipe} setRecipes={setRecipes}/>} ></Route> 
                <Route path='/newrecipe' element={<NewRecipe addRecipe={addRecipe}/>}></Route>
                <Route path='/editrecipe' element={<EditRecipe/>}></Route>
                <Route path='/showrecipe/:id' element={<ShowRecipe recipe={recipe} setRecipe={setRecipe}/>}></Route>
          


            </Routes>
        </main>

    

    </div>
  )
}

export default App