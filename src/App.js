import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Landing from './components/Landing';
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
import RecipeFinder from './components/RecipeFolder/RecipeFinder';
import MealList from './components/RecipeFolder/MealList';
import MealDetails from './components/RecipeFolder/MealDetails';
import AddOnlineRecipe from './components/RecipeFolder/AddOnlineRecipe';
import ReadyToGo from './components/RecipeFolder/ReadyToGo';
import Matchlist from './components/RecipeFolder/Matchlist'
import Logout from './components/Logout';
import UpdatedKitchen from './components/Ingredients/UpdatedKitchen';
import OnlineRecipeFields from './components/RecipeFolder/OnlineRecipeFields';
import FinalOnlineRecFields from './components/RecipeFolder/FinalOnlineRecFields';

import Scratchwork from './components/RecipeFolder/Scratchwork';




const App = () => {

  const[recipes, setRecipes]= useState([]);
  const[recipe, setRecipe] = useState('');
  const[ingredients, setIngredients] = useState([]);
  const[ingredient, setIngredient] = useState({});

  const[recipesData, setRecipesData] = useState(null)

  const[onlineRecipe, setOnlineRecipe] = useState({})
  const[recipeMatches, setRecipeMatches] = useState([])

  const [ingredientString, setIngredientString] = useState([])
  const [ingredientsNew, setIngredientsNew] = useState([{ingredient: ""}]);

  const [url, setUrl] = useState()


  let getIngredients = async() => {
    console.log('yes')
    let data = await fetch(url + 'kitchen')
    let json = await data.json()
    console.log(json)
    setIngredients(json)
  }

  let getRecipes = async() => {
    console.log('yes')
    let recipeData = await fetch(url + 'recipe')
    let recipeJson = await recipeData.json()
    console.log(recipeJson)
    setRecipes(recipeJson)
  }

  useEffect(() => {
    const urlx = process.env.REACT_APP_ENV === 'production' ? 'https://apple-crisp-78388.herokuapp.com/' : 'http://localhost:4000/'
    setUrl(urlx)
  }, []);

useEffect(()=>{
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
    <div>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">What's Cookin'</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/landing">Home</Nav.Link>
            <Nav.Link href="/kitchen">Kitchen</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recipebook">My Recipe Book</NavDropdown.Item>
              <NavDropdown.Item href="/readytogo">Ready To Go</NavDropdown.Item>
              <NavDropdown.Item href="/findrecipe">Find New Recipes</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <main>
            <Routes>
                <Route path='/updatedkitchen' element={<UpdatedKitchen/>}></Route>


                {/* <Route path='/welcome' element={<Welcome/>} ></Route> */}
                <Route path='/landing' element={<Landing/>}></Route>
                <Route path='/welcome' element={<Welcome/>}></Route>
                <Route path='/session/login' element={<Login url={url}/>} ></Route>
                <Route path='/session/register' element={<Register url={url}/>} ></Route>
                <Route element={<Logout url={url}/>}></Route>
                <Route path='/kitchen' element={<Kitchen ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients}/>} ></Route>
                <Route path='/updatedkitchen' element={<UpdatedKitchen ingredients={ingredients} setIngredients={setIngredients}/>}></Route>
                <Route path='/newingredient' element={<NewIngredient addIngredient={addIngredient} ingredient={ingredient} ingredients={ingredients} setIngredient={setIngredient} setIngredients={setIngredients} url={url}/>}></Route>
                <Route path='editingredient/:id' element={<EditIngredient ingredient={ingredient} setIngredient={setIngredient} url={url}/>}></Route>
                <Route path='showingredient/:id' element={<ShowIngredient ingredient={ingredient} setIngredient={setIngredient} url={url}/>}></Route>

                <Route path='/findrecipe' element={<RecipeFinder ingredients={ingredients} recipesData={recipesData} setRecipesData={setRecipesData}/>}></Route>
                <Route path='/meallist' element={<MealList onlineRecipe={onlineRecipe} setOnlineRecipe={setOnlineRecipe} recipeData={recipesData}/>}></Route>
                <Route path='/mealdetails/:id' element={<MealDetails onlineRecipe={onlineRecipe} setOnlineRecipe={setOnlineRecipe}/>}></Route>
                <Route path='/addonlinerecipe/:id' element={<AddOnlineRecipe addRecipe={addRecipe} onlineRecipe={onlineRecipe} setOnlineRecipe={setOnlineRecipe} ingredientString={ingredientString} setIngredientString={setIngredientString} ingredientsNew={ingredientsNew} setIngredientsNew={setIngredientsNew} url={url}/>}></Route>

          
                

                <Route path='/recipebook' element={<RecipeBook recipe={recipe} recipes={recipes} setRecipe={setRecipe} setRecipes={setRecipes} url={url}/>} ></Route> 
                <Route path='/newrecipe' element={<NewRecipe addRecipe={addRecipe} url={url}/>}></Route>
                <Route path='/editrecipe/:id' element={<EditRecipe ingredients={ingredients} setIngredients={setIngredients} url={url}/>}></Route>
                <Route path='/showrecipe/:id' element={<ShowRecipe recipe={recipe} setRecipe={setRecipe} url={url}/>}></Route>
                <Route path='/readytogo' element={<ReadyToGo ingredients={ingredients} recipes={recipes} getIngredients={getIngredients} getRecipes={getRecipes} recipeMatches={recipeMatches} setRecipeMatches={setRecipeMatches} url={url}/>}></Route>
                <Route path='/matchlist' element={<Matchlist recipeMatches={recipeMatches} setRecipeMatches={setRecipeMatches}/>}></Route>
                <Route path='/scratchwork' element={<Scratchwork/>}></Route>


            </Routes>
        </main>

    

    </div>
  )
}

export default App