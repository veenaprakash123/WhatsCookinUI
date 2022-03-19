import React from 'react'
import {Form, Button} from 'react-bootstrap'

const NewIngredient = ({addIngredient, ingredient, ingredients}) => {






  return (
    <div>
        <h1>New Ingredient</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Ingredient</Form.Label>
           <Form.Control type="name" id="name" name="name" placeholder="Enter name of new ingredient" />
         </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Amount</Form.Label>
           <Form.Control type="amount" id="amount" name="amount" placeholder="Ex: 2 boxes" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Where do you store it?</Form.Label>
           <Form.Control type="location" id="location" name="location" placeholder="Ex: fridge" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Image</Form.Label>
           <Form.Control type="image" id="image" name="image" placeholder="Enter url of an online image" />
        </Form.Group>

         <Button variant="primary" type="submit">
           Sign In 
         </Button>
      </Form>

    </div>
  )
}

export default NewIngredient