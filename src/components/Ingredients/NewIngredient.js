import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import '../CSS/General.css'

const NewIngredient = ({addIngredient, url}) => {

  const [ingredient, setIngredient]= useState({})

    let navigate = useNavigate()

    let handleChange = (e) => {
      console.log(ingredient)
      setIngredient({...ingredient,[e.target.id]:e.target.value})
    }

    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log({ingredient})
        let response = await fetch(`${url}/kitchen`, {
        // let response = await fetch('http://localhost:4000/kitchen', {
            method: "POST",
            body: JSON.stringify(
                // name: ingredient.name,
                // amount: ingredient.amount,
                // location: ingredient.location,
                // image: ingredient.image
                ingredient
            ), 
            headers: {
                'Content-Type':'application/json'
            }
        })
        let newIngredient = await response.json()
        console.log(newIngredient)
        await addIngredient(newIngredient)
        navigate('/kitchen')
    }



  return (
    <div>
        <h1 className='main-header'>New Ingredient</h1>
     
        <Form onSubmit={handleSubmit} style={{marginTop: 70}}>

        <Form.Group className="mb-3 formfields" >
           <Form.Label>Name</Form.Label>
           <Form.Control type="name" id="name "name="name" placeholder="Enter name of new ingredient" onChange={handleChange} />
         </Form.Group>

        <Form.Group className="mb-3 formfields" >
           <Form.Label>Amount</Form.Label>
           <Form.Control type="amount" id="amount" name="amount" placeholder="Ex: 2 boxes" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3 formfields">
           <Form.Label>Where do you store it?</Form.Label>
           <Form.Control type="location" id="location" name="location" placeholder="fridge or pantry?" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3 formfields">
           <Form.Label>Image</Form.Label>
           <Form.Control type="text" id="image" name="image" placeholder="Enter url of an online image" onChange={handleChange} />
        </Form.Group>

         <Button className='enter' variant="dark" type="submit">
           Add New Ingredient 
         </Button>
      </Form>
    

    </div>
  )
}

export default NewIngredient