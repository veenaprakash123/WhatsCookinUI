import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Button, Card} from 'react-bootstrap'
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
        <form className='App' autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-field'>
                <label htmlFor='meal'>Meal</label>
                <input name='meal' type='text' id='meal' defaultValue ={onlineRecipe.title}  />
            </div>


            <div className='form-field'>

                <label htmlFor='ingredient'>Ingredients</label>
                
                {url, ingredientString, ingredientsNew, setIngredientsNew && <OnlineRecipeFields ingredientString={ingredientString} setIngredientsNew={setIngredientsNew} ingredientsNew={ingredientsNew} url={url}/>}  

                {/* {onlineRecipe && <IngredientFields onlineRecipe={onlineRecipe}/>} */}

                <button type="button" className='add-btn' onClick={handleIngredientAdd}>
                    <span>Add Ingredient to Recipe</span>
                </button>

            </div>
           
            <div className='form-field'>
                <label htmlFor='meal'>Instructions</label>
                <input name='instructions' type='text' id='instructions' defaultValue={onlineRecipe.instructions} onChange={handleChangeInstructions}/>
            </div>

            <div>
           <button>
                    <span>Add Recipe</span>
                </button>
            </div>
        </form>
        </Card>

    </div>
  )
}

export default AddOnlineRecipe