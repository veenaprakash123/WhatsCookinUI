import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import {Button, Card} from 'react-bootstrap'
import OnlineRecipeFields from './OnlineRecipeFields'

const AddOnlineRecipe = ({addRecipe, onlineRecipe, setOnlineRecipe, ingredientString, setIngredientString, ingredientsNew, setIngredientsNew}) => {


    let {id} = useParams()
    let navigate = useNavigate()

    // const [ingredientsNew, setIngredientsNew] = useState([{ingredient: ""}]);
    const [meal, setMeal] = useState('')
    const [instructions, setInstructions] = useState('')
    const [recipe, setRecipe] = useState({})
   

    useEffect(()=> {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=5d0b0736e8d24604ba71a7ac99a5571b&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=> {
            // setOnlineRecipe(data)
            console.log(data)
            setOnlineRecipe(data)
            setMeal(data.title)
            setIngredientString(data.extendedIngredients) // This is not adding each ingredient from the online recipe as an 'ingredient' object. it is just adding it as a string.
            setInstructions(data.instructions)
        })
        .catch(()=>{
            console.log("error")
        })
    }, [id])

    const handleIngredientAdd = () => {
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
        const list = [...ingredientsNew];
        list.splice(index, 1);
        setIngredientsNew(list)
    }

  
    // let newArray = ingredientString.map((ing) => {
    //     return {ingredient:ing.name}
    // })
    
    // console.log(newArray)
    // setIngredients(newArray)

    // let displayIngredients = ingredientsNew? 
    //     ingredientsNew.map((ing, index) => {
    //         return(
    //             <div key={index}  className="ingredients">
    //                 <div className='first-division'>
    //                     <input name='ingredient' type='text' defaultValue={ing.name} onChange={(e)=> handleChangeIngredient(e, index)}/> 
    //                 </div>
    //                 <div className='second-division'>
    //                     {ingredientsNew.length > 1 && 
    //                         <button type='button' className='remove-btn' value={ing.name} onClick={handleRemove}>
    //                             <span>Remove</span>
    //                         </button>
    //                     }
    //                 </div>
    //             </div>
    //         )
    //     }): null


        let handleSubmit = async(e) => {
            e.preventDefault()
            console.log(ingredientsNew)
    
    
            let response = await fetch('http://localhost:4000/recipe', {
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

        // function removeTags(str) {
        //     if ((str===null) || (str===''))
        //         return false;
        //     else
        //         str = str.toString();
        //     return str.replace( /(<([^>]+)>)/ig, ' ')
      
        //   }
        
        // const displayInstructions = removeTags(onlineRecipe.instructions)

  return (
    <div>
         <Card>
        <form className='App' autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-field'>
                <label htmlFor='meal'>Meal</label>
                <input name='meal' type='text' id='meal' defaultValue ={onlineRecipe.title} />
            </div>


            <div className='form-field'>

                <label htmlFor='ingredient'>Ingredients</label>
                
                {ingredientString, ingredientsNew, setIngredientsNew && <OnlineRecipeFields ingredients={ingredientString} setIngredientsNew={setIngredientsNew} ingredientsNew={ingredientsNew}/>}  

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