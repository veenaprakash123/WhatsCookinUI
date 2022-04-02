import React from 'react'
import {Button, Card, Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../CSS/General.css'


const RecipeBook = ({recipe, recipes, setRecipe, setRecipes, url}) => {

  let navigate = useNavigate()

  let deleteRecipe = async(i) => {
    console.log(i)
    let data = await fetch('http://localhost:4000/recipe/details/' + i, {
      method: "DELETE",
      body: null,
      headers: {
        'Content-Type':'application/json'
      }
    })
    let remainingRecipes = await data.json()
    setRecipes(remainingRecipes)
    navigate('/recipebook')
  }



  const displayRecipes = recipes? recipes.map((recipe) => {
    return(
        <div key={recipe._id}>
          <Card className='custom-class'>
            <Card.Title>{recipe.meal}</Card.Title>
            <div className='links'>
            <Card.Link href={`/showrecipe/${recipe._id}`}>View</Card.Link>
            <Card.Link href={`/editrecipe/${recipe._id}`}>Edit</Card.Link>
            <Button onClick= {() => deleteRecipe(recipe._id)} variant="light">Delete</Button> 
            </div>
          </Card>
        </div>
    )
  }): null 


  return (
    <div>
        <div className='main-header'style={{backgroundColor: 'hsla(50, 33%, 25%, .75)'}}>

          <h1>Recipe Book</h1>
          <div>
            <Button variant="dark" onClick={() => navigate('/newrecipe')}>
              Add Recipe
            </Button>
          </div>
        </div>

        <div> 
        <Carousel className='carousel' style={{height:'50px'}}>
          <Carousel.Item>
            <img
              className="d-block w-100" 
              src="https://www.itl.cat/pngfile/big/285-2853509_food-wallpaper-hd-high-resolution-food-images-hd.jpg"
              alt="First slide"
            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/726/294/488/cuisine-food-india-indian-wallpaper-preview.jpg"
              alt="Second slide"
            />

          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>

        <div className='container'>

        {displayRecipes}

        </div>
    </div>
  )
}

export default RecipeBook