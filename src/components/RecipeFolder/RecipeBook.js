import React from 'react'
import {Button, Card, Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const RecipeBook = ({recipe, recipes, setRecipe, setRecipes}) => {

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
          <Card>
            <Link to={`/showrecipe/${recipe._id}`}><h1>{recipe.meal}</h1></Link>
            <Link to={`/showrecipe/${recipe._id}`} key={recipe._id}>View</Link>
            <Link to={`/editrecipe/${recipe._id}`} key={recipe.id}>Edit</Link>
            <Button onClick= {() => deleteRecipe(recipe._id)}>Delete</Button> 
          </Card>
        </div>
    )
  }): null 


  return (
    <div>
        <h1>RecipeBook</h1>
        <div className='center'> 
        <Carousel style={{width: '80%' , height: '20rem'}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.itl.cat/pngfile/big/285-2853509_food-wallpaper-hd-high-resolution-food-images-hd.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/726/294/488/cuisine-food-india-indian-wallpaper-preview.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>


        {displayRecipes}

        <Button>
          <Link to='/newrecipe' style={{ color:'white', textDecoration: 'none' }}>
            Add Recipe
          </Link>
        </Button>

    </div>
  )
}

export default RecipeBook