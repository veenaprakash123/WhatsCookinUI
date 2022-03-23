import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const RecipeBook = ({recipe, recipes, setRecipe, setRecipes}) => {

  let navigate = useNavigate()

  let deleteRecipe = async(i) => {
    console.log(i)
    let data = await fetch('http://localhost:4000/kitchen/details/' + i, {
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



  const displayRecipes = recipes? recipes.map((r) => {
    return(
        <div key={r._id}>
        <Link to={`/showrecipe/${r._id}`}><h1>{r.meal}</h1></Link>
        <Link to={`/showingredient/${r._id}`} key={r._id} >View</Link>
        <Button onClick= {() => deleteRecipe(r._id)}>Delete</Button> 
        </div>
    )
  }): null 


  return (
    <div>
        <h1>RecipeBook</h1>
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