import React from 'react'
import {Button, Card, ListGroup} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router'
import '../CSS/Kitchen.css'
import '../CSS/General.css'
import Logout from '../Logout'
import Table from 'react-bootstrap/Table'


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
            <Card.Img variant="top" src={`${ingredient.image}`} style={{ width: '12rem' , height:'10rem', marginLeft:'10'}} ></Card.Img>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title key={ingredient._id}>{ingredient.name}</Card.Title>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Link href={`/editingredient/${ingredient._id}`} key={ingredient.id}>Edit</Card.Link>
                <Card.Link href={`/showingredient/${ingredient._id}`} key={ingredient._id}>View</Card.Link>
                <Card.Link><Button onClick= {() => deleteIngredient(ingredient._id)} variant="light">Delete</Button> </Card.Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      )
    }
  })


  const displayIngredientsPantry = ingredients.map((ingredient) => {

    if (ingredient.location == 'pantry') {
    return(
        <div key={ingredient._id}>
          <tr>
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
            <td>filler</td>
          </tr>
          {/* <Card>
          <Card.Img variant="top" src={`${ingredient.image}`} style={{ width: '14rem' , height:'10rem', marginLeft:'10'}} ></Card.Img>
          <ListGroup variant="flush">
            <ListGroup.Item className='list-group-item'>
              <Card.Title key={ingredient._id} style={{alignContent: 'center'}}>{ingredient.name}</Card.Title>
            </ListGroup.Item>
         </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item className='list-group-item'>
              <Card.Link href={`/editingredient/${ingredient._id}`} key={ingredient.id}>Edit</Card.Link>
              <Card.Link href={`/showingredient/${ingredient._id}`} key={ingredient._id}>View</Card.Link>
              <Card.Link><Button onClick= {() => deleteIngredient(ingredient._id)} variant="light">Delete</Button> </Card.Link>
            </ListGroup.Item>
         </ListGroup>
        </Card> */}
        </div>
    )
    }
  })

  return (

  
    <div style={{backgroundColor:'#fff8dc'}}>


        <div className='main-header'>
          <h1>Kitchen</h1>

          <div>
          <Button variant="dark" onClick={() => navigate('/newingredient')}>
            Add Ingredient
          </Button>
          </div>
        </div>

        <h3 className='subheading'>Fridge</h3>

        <div className='container'>
          
          {displayIngredientsFridge}


        </div>


        <h3 className='subheading'>Pantry</h3>

        <div>
          <Table striped bordered hover size="sm" className='table'>
            <thead>
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Perishable?</th>
              </tr>
            </thead>
            <tbody>
              {displayIngredientsPantry}
            </tbody>
          </Table>
        </div>

        <div className='logout'>
          {<Logout/>}
        </div>

    </div>

  )
}

export default Kitchen