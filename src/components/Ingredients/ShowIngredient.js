import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom';
import {Button, Card, ListGroup} from 'react-bootstrap'
import '../CSS/General.css'

const ShowIngredient = ({ingredient, setIngredient}) => {



    let {id} = useParams()
  
    useEffect(()=> {
      const showDetails = async() => {
        let  ingredientResponse = await fetch('http://localhost:4000/kitchen/details/' + id) 
        let json = await ingredientResponse.json()
        setIngredient(json)
      }
      showDetails()
      console.log(ingredient)
    }, [id]) 





  return (
    <div>
        <Button variant="dark" style={{marginTop: 30}} >
            <Link to='/kitchen' style={{ color:'white', textDecoration: 'none' }}>
            Return to Kitchen
          </Link>
        </Button>
        <div className='item-details'>
        <Card style={{marginTop:'8rem', width:'15rem'}}>
          <Card.Img variant="top" src={`${ingredient.image}`} style={{ width: '10rem' , height:'10rem', marginLeft:'10'}}></Card.Img>
          <ListGroup variant="flush">
            <ListGroup.Item style={{alignContent: 'center'}}>
              <Card.Title key={ingredient._id} style={{alignContent: 'center'}}>{ingredient.name}</Card.Title>
            </ListGroup.Item>
         </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item key={ingredient.id}>
              Amount: {ingredient.amount}
            </ListGroup.Item>
            <ListGroup.Item key={ingredient.id}>
              Location: {ingredient.location}
            </ListGroup.Item>
            <ListGroup.Item key={ingredient.id}>
              <Card.Link href={`/editingredient/${ingredient._id}`} key={ingredient.id}>Edit</Card.Link>
            </ListGroup.Item>
         </ListGroup>
        </Card>
        </div>
    </div>
  )
}

export default ShowIngredient