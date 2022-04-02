import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Button, Card, Form} from 'react-bootstrap'
import OnlineRecipeFields from './OnlineRecipeFields'

const AddOnlineRecipe = ({addRecipe, onlineRecipe, setOnlineRecipe, ingredientString, setIngredientString, ingredientsNew, setIngredientsNew, url}) => {


    let {id} = useParams()
    let navigate = useNavigate()

    // const [ingredientsNew, setIngredientsNew] = useState([{ingredient: ""}]);
    const [meal, setMeal] = useState('')
    const [instructions, setInstructions] = useState('')
    const [recipe, setRecipe] = useState({})
   

    useEffect(()=> {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=> {
            // setOnlineRecipe(data)
            console.log(data)
            setOnlineRecipe(data)
            setMeal(data.title)
            setIngredientString(data.extendedIngredients) 
            setIngredientsNew(data.extendedIngredients.map((i)=>{
                return{ingredient:i.name}
            })) 
            setInstructions(data.instructions)
        })
        .catch(()=>{
            console.log("error")
        })
    }, [id])


    let handleChangeMeal = (e) => {
        setMeal(e.target.value)
      }

    const handleIngredientAdd = () => {
        console.log(ingredientsNew)
        setIngredientsNew([...ingredientsNew, {ingredient: ""}])
    }

    let handleChangeInstructions = (e) =>{
        setInstructions(e.target.value)
    }


    let handleChangeIngredient = (e, index) => {
        const {name, value} = e.target
        const list = [...ingredientsNew]
        list[index][name] = value
        setIngredientsNew(list); 
    }

    let handleRemove = (index) => {
        const list = ingredientsNew.filter((ing, i)=> i !== index)
        // const list = [...ingredientsNew];
        // list.splice(index, 1);
        setIngredientsNew(list)
    }



        let handleSubmit = async(e) => {
            e.preventDefault()
            console.log(ingredientsNew)
    
            console.log(onlineRecipe)
    
            let response = await fetch(`${url}/recipe`, {
                method: "POST",
                body: JSON.stringify({
                    meal: meal,
                    ingredients: ingredientsNew,
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
         <Card>
        <Form autoComplete='off' onSubmit={handleSubmit} style={{marginTop: 60, marginBottom: 40}}>


        <Form.Group className='mb-3 formfields'>
                <Form.Label style={{textDecoration:'underline'}}> Meal</Form.Label>
                <Form.Control type="text" name='meal' id="meal" onChange={handleChangeMeal}></Form.Control>
            </Form.Group>


        <Form.Label className='formfields' style={{textDecoration:'underline'}}> Ingredients: </Form.Label>


            <div className='form-field'>
                
                {url, ingredientString, ingredientsNew, setIngredientsNew && <OnlineRecipeFields ingredientString={ingredientString} setIngredientsNew={setIngredientsNew} ingredientsNew={ingredientsNew} url={url}/>}  

                {/* {onlineRecipe && <IngredientFields onlineRecipe={onlineRecipe}/>} */}

                <Button type="button" className='add-btn formfields' variant='dark' onClick={handleIngredientAdd} style={{marginLeft: '15%'}}>
                    <span>Add Ingredient to Recipe</span>
                </Button>

            </div>
           
            <Form.Group className='formfields'>
                <Form.Label style={{textDecoration:'underline', marginTop:'2%'}}>Instructions</Form.Label>
                <Form.Control type='text' id='instructions' onChange={handleChangeInstructions}></Form.Control>
            </Form.Group>
           



            {/* <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' defaultValue={onlineRecipe.instructions} onChange={handleChangeInstructions}/>
            </div> */}

            <Button type='submit' variant='dark' style={{marginLeft: '15%'}}>
                <span>Add Recipe</span>
            </Button>
        </Form>
        </Card>

    </div>
  )
}

export default AddOnlineRecipe