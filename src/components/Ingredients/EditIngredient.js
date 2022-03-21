import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {  useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'

const EditIngredient = () => {

    const [ingredient, setIngredient] = useState('')

    let {id} = useParams()
    let navigate = useNavigate()

    useEffect(()=> {
        const editDetails = async() => {
          let  ingredientResponse = await fetch('http://localhost:4000/kitchen/details/' + id) 
          let json = await ingredientResponse.json()
          console.log(json)
          setIngredient(json)
        }
        editDetails()
        console.log(ingredient)
      }, [id])


      let handleChange = (e) => {
        setIngredient({...ingredient,[e.target.id]:e.target.value})
     }



      let handleSubmit = async(e) => {
        e.preventDefault()

        let response = await fetch('http://localhost:4000/kitchen/edit/' + id, {
        method: "PUT", 
        body: JSON.stringify(ingredient),
        headers: {
            'Content-Type':'application/json'
        }  
    })
    console.log(response)
    navigate(`/showingredient/${id}`)

      }
    



  return (
    <div>
        <h1>New Ingredient</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Ingredient</Form.Label>
           <Form.Control type="name" id="name" name="name" value={ingredient.name} onChange={handleChange} />
         </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Amount</Form.Label>
           <Form.Control type="amount" id="amount" name="amount" value={ingredient.amount} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Where do you store it?</Form.Label>
           <Form.Control type="location" id="location" name="location" value={ingredient.location} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Image</Form.Label>
           <Form.Control type="text" id="image" name="image" value={ingredient.image} onChange={handleChange}/>
        </Form.Group>

         <Button variant="primary" type="submit">
           Edit Ingredient 
         </Button>
      </Form>




    </div>
  )
}

export default EditIngredient