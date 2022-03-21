import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NewIngredient = ({addIngredient, ingredient, ingredients, setIngredient, setIngredients}) => {


    let navigate = useNavigate()

    let handleChange = (e) => {
        setIngredient({...ingredient,[e.target.id]:e.target.value})
    }

    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log({ingredient})

        let response = await fetch('http://localhost:4000/kitchen', {
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
        let newIngredient = response.json()
        console.log(newIngredient)
        addIngredient(newIngredient)
        navigate('/kitchen')
    }



  return (
    <div>
        <h1>New Ingredient</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Ingredient</Form.Label>
           <Form.Control type="name" id="name" name="name" placeholder="Enter name of new ingredient" onClick={handleChange} />
         </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Amount</Form.Label>
           <Form.Control type="text" id="amount" name="amount" placeholder="Ex: 2 boxes" onClick={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Where do you store it?</Form.Label>
           <Form.Control type="text" id="location" name="location" placeholder="Ex: fridge" onClick={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Image</Form.Label>
           <Form.Control type="text" id="image" name="image" placeholder="Enter url of an online image" onClick={handleChange} />
        </Form.Group>

         <Button variant="primary" type="submit">
           Add New Ingredient 
         </Button>
      </Form>

    </div>
  )
}

export default NewIngredient