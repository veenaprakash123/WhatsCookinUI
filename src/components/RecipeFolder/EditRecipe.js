import React from 'react'
import { useState, useEffect} from 'react'
import {  useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Card, Button, Form} from 'react-bootstrap'

const EditRecipe = ({url}) => {

    const [recipe, setRecipe] = useState({})

    const [meal, setMeal] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState('')

    let {id} = useParams()
    let navigate = useNavigate()

    // function mealName(mealName){
    //     setMeal(mealName.meal)
    // }

    // const editDetails = async() => {
    //     let  recipeResponse = await fetch('http://localhost:4000/recipe/' + id) 
    //     let json = await recipeResponse.json()
    //     console.log(json)
    //     setRecipe(json)

      

    useEffect(()=> {
        const editDetails = async() => {
            let  recipeResponse = await fetch(`${url}/recipe/` + id) 
        //   let  recipeResponse = await fetch('http://localhost:4000/recipe/' + id) 
          let json = await recipeResponse.json()
          console.log(json)
          setRecipe(json)
          setMeal(json.meal)
          setIngredients(json.ingredients)
          setInstructions(json.instructions)
        }
        editDetails()
      }, [id])




    const handleIngredientAdd = () => {
        setIngredients([...ingredients, {ingredient: ""}])
    }


    let handleMealChange = (e) => {
        setMeal(e.target.value)
    }

    let handleChangeInstructions = (e) => {
        setInstructions(e.target.value)
      }

    let handleChangeIngredient = (e, index) => {
        const {name, value} = e.target
        const list = [...ingredients]
        list[index][name] = value
        setIngredients(list); 
    }

    let handleRemove = (index) => {
        const list = [...ingredients];
        list.splice(index, 1);
        setIngredients(list)
    }


    let handleSubmit = async(e) => {
        e.preventDefault()
        let response = await fetch(`${url}/recipe/edit/` + id, {
        // let response = await fetch('http://localhost:4000/recipe/edit/' + id, {
        method: "PUT", 
        body: JSON.stringify({
            meal: meal,
            ingredients: ingredients,
            instructions: instructions 
        }),
        headers: {
            'Content-Type':'application/json'
        }  
    })
    console.log(response)
    console.log(recipe)
    navigate('/recipebook')
    // navigate(`/showingredient/${id}`)

    }

    let displayIngredients = ingredients? 
        ingredients.map((ing, index) => {
            return(
                <Form.Group key={index} className='mb-3 formfields'>
                <Form.Control type="text" id="ingredient" name='ingredient' defaultValue={ing.ingredient} onChange={(e) => handleChangeIngredient(e, index)} ></Form.Control>
                               
                        {ingredients.length > 1 && 
                            <Button type='button' className='remove-btn' variant='light' value= {ing.ingredient} onClick={handleRemove}>
                                <span>Remove</span>
                            </Button>
                        }
                </Form.Group>
                ) }) : null



  return (
    <div>
        <Button variant="dark" style={{marginTop: 30}}>
            <Link to='/recipebook' style={{ color:'white', textDecoration: 'none' }}>
              Return to Recipes
            </Link>
        </Button>

        <Form autoComplete='off' onSubmit={handleSubmit} style={{marginTop: 70}}>

            <Form.Group className='mb-3 formfields'>
                <Form.Label style={{textDecoration:'underline'}}>Meal</Form.Label>
                <Form.Control type="text" name='meal' id="meal" defaultValue ={recipe.meal} onChange={handleMealChange}></Form.Control>
            </Form.Group>

            <Form.Label className='formfields' style={{textDecoration:'underline'}}> Ingredients: </Form.Label>
            
                
                {displayIngredients}

            {/* <Button type="button" className='add-btn' onClick={handleIngredientAdd}>
                <span>Add Ingredient to Recipe</span>
            </Button> */}

            <Button type="button" className='formfields' variant='dark' onClick={handleIngredientAdd} style={{marginLeft: '15%'}}>
                <span>Add Ingredient to Recipe</span>
            </Button>

          
            <Form.Group className='formfields'>
                <Form.Label style={{textDecoration:'underline', marginTop:'2%'}}>Instructions</Form.Label>
                <Form.Control type='text' id='instructions' defaultValue={recipe.instructions} onChange={handleChangeInstructions}></Form.Control>
            </Form.Group>
           
           
            {/* <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' defaultValue={recipe.instructions} onChange={handleChangeInstructions}/>
            </div> */}

            <Button type='submit' variant='dark' style={{marginLeft: '15%'}}>
                <span>Edit Recipe</span>
            </Button>

            {/* <div>
                <button>
                    <span>Edit Recipe</span>
                </button>
            </div> */}
    
        </Form>
      
    </div>
  )
}

export default EditRecipe