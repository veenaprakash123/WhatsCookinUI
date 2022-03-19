import React from 'react'
import {Link , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Kitchen from './components/Kitchen'
import RecipeBook from './components/RecipeBook'



const App = () => {

  const[recipes, setRecipes]= useState([]);
  const[recipe, setRecipe] = useState('');
  const[ingredients, setIngredients] = useState([]);
  const[ingredient, setIngredient] = useState('');


  let getIngredients = async() => {
    let data = await fetch('http://localhost:4000/kitchen')
    let json = data.json()
    console.log(json)
    setIngredients(json)
  }

  useEffect(() => {
    getIngredients();
  }, []);

  let getIngredient = (ingredient) => {
    setIngredient(ingredient)
  }



  return (
    <div>App
        <main>
            <Routes>
                {/* <Route path='/welcome' element={<Welcome/>} ></Route> */}
                <Route path='/session/login' element={<Login/>} ></Route>
                <Route path='/session/register' element={<Register/>} ></Route>
                {/* <Route path='/kitchen' element={<Kitchen ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients}/>} ></Route>
                <Route path='/recipes' element={<RecipeBook/>} ></Route> */}

            </Routes>
        </main>

    

    </div>
  )
}

export default App