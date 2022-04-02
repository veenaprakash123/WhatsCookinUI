import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate} from 'react-router'
import '../CSS/General.css'


function NewRecipe({addRecipe, url}) {

    const [ingredientsList, setIngredientsList] = useState([{ingredient: ""}]);
    const [meal, setMeal] = useState('')
    const [instructions, setInstructions] = useState('')
    const [recipe, setRecipe] = useState({})

    let navigate = useNavigate()

    const handleIngredientAdd = () => {
        setIngredientsList([...ingredientsList, {ingredient: ""}])
    }

    let handleChangeMeal = (e) => {
        setMeal(e.target.value)
      }

    let handleChangeInstructions = (e) => {
        setInstructions(e.target.value)
      }

    let handleChangeIngredient = (e, index) => {
        const {name, value} = e.target
        const list = [...ingredientsList]
        list[index][name] = value
        setIngredientsList(list); 
    }

    let handleRemove = (index) => {
        const list = [...ingredientsList];
        list.splice(index, 1);
        setIngredientsList(list)
    }



    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log(ingredientsList)


        let response = await fetch(url+'recipe', {
            method: "POST",
            body: JSON.stringify({
                meal: meal,
                ingredients: ingredientsList,
                instructions: instructions
            }), 
            headers: {
                'Content-Type':'application/json'
            }
        })
        let newRecipe = await response.json()
        console.log(newRecipe)
        addRecipe(newRecipe)
        navigate('/recipebook')
    }
    

  return (
    <div>

        <h1 className='main-header'> New Recipe </h1>

        <Form autoComplete='off' onSubmit={handleSubmit} style={{marginTop: 60, marginBottom: 40}}>

            <Form.Group className='mb-3 formfields'>
                <Form.Label style={{textDecoration:'underline'}}> Meal</Form.Label>
                <Form.Control type="text" name='meal' id="meal" onChange={handleChangeMeal}></Form.Control>
            </Form.Group>

            <Form.Label className='formfields' style={{textDecoration:'underline'}}> Ingredients: </Form.Label>

            {ingredientsList.map((ing, index) => {
            return (

            <Form.Group key={index} className='mb-3 formfields'>
            <Form.Control type="text" id="ingredient" name='ingredient' onChange={(e) => handleChangeIngredient(e, index)} ></Form.Control>
                           
                    {ingredientsList.length > 1 && 
                        <Button type='button' className='remove-btn' variant='light' value= {ing.ingredient} onClick={handleRemove}>
                            <span>Remove</span>
                        </Button>
                    }
            </Form.Group>
            )   
            })}


            <Button type="button" className='formfields' variant='dark' onClick={handleIngredientAdd} style={{marginLeft: '15%'}}>
                <span>Add Ingredient to Recipe</span>
            </Button>

           

            <Form.Group className='formfields'>
                <Form.Label style={{textDecoration:'underline', marginTop:'2%'}}>Instructions</Form.Label>
                <Form.Control type='text' id='instructions' onChange={handleChangeInstructions}></Form.Control>
            </Form.Group>
           
          
            <Button type='submit' variant='dark' style={{marginLeft: '15%'}}>
                <span>Add Recipe</span>
            </Button>
         
        </Form>

    </div>
  )
}

export default NewRecipe