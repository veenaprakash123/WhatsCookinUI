import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router'
import '../CSS/Kitchen.css'
import '../CSS/General.css'


const Kitchen = ({ingredient, ingredients, setIngredient, setIngredients}) => {

  let ingredientInFocus = (e) => {
    console.log(e.target)
  }

  // let {id} = useParams()
  let navigate = useNavigate()

  let deleteIngredient = async(i) => {
    console.log(i)
    let data = await fetch('http://localhost:4000/kitchen/details/' + i, {
      method: "DELETE",
      body: null,
      headers: {
        'Content-Type':'application/json'
      }
    })
    let remainingIngredients = await data.json()
    setIngredients(remainingIngredients)
    navigate('/kitchen')
  }
 
  const displayIngredientsFridge =  ingredients.map((ingredient) => {

    if (ingredient.location == 'fridge') {
    return(
        <div key={ingredient._id}>
          <Card key={ingredient._id}>
            <Card.Img variant="top" src="holder.js/100px180" ></Card.Img>
            <Card.Title key={ingredient._id}>{ingredient.name}</Card.Title>
            <div className='links'>
            <Card.Link href={`/editingredient/${ingredient._id}`} key={ingredient.id}>Edit</Card.Link>
            <Card.Link href={`/showingredient/${ingredient._id}`} key={ingredient._id}>View</Card.Link>
            <Button onClick= {() => deleteIngredient(ingredient._id)}>Delete</Button> 
            </div>
        </Card>
        </div>
    )
    }
  })


  const displayIngredientsPantry = ingredients.map((ingredient) => {

    if (ingredient.location == 'pantry') {
    return(
        <div key={ingredient._id}>
          <Card>
          <Card.Img variant="top" src="holder.js/100px180" ></Card.Img>
          <Card.Title key={ingredient._id}>{ingredient.name}</Card.Title>
          <div className='links'>
          <Card.Link href={`/editingredient/${ingredient._id}`} key={ingredient.id}>Edit</Card.Link>
          <Card.Link href={`/showingredient/${ingredient._id}`} key={ingredient._id}>View</Card.Link>
          <Card.Link><Button onClick= {() => deleteIngredient(ingredient._id)}>Delete</Button> </Card.Link>
          </div>
  
        </Card>
        </div>
    )
    }
  })

  return (
    <div>

        <h1 className='header'>Kitchen</h1>

        <div className='addButton'>
        <Button variant="light" onClick={() => navigate('/newingredient')}>
          Add Ingredient
        </Button>
        </div>

        <h3 className='subheading'>Fridge</h3>

        <div className='container'>
          
          {displayIngredientsFridge}


        </div>


        <h3 className='subheading'>Pantry</h3>

        <div className='container'>

          {displayIngredientsPantry}


        </div>

    </div>

  )
}

export default Kitchen