import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router'


const Kitchen = ({ingredient, ingredients, setIngredient, setIngredients}) => {

  let ingredientInFocus = (e) => {
    console.log(e.target)
  }

  // let {id} = useParams()
  let navigate = useNavigate()

  let deleteIngredient = async(i) => {
    console.log(i)
    let data = await fetch('http://localhost:4000/kitchen/details/' + i, {
      method: "DELETE",
      body: null,
      headers: {
        'Content-Type':'application/json'
      }
    })
    let remainingIngredients = await data.json()
    setIngredients(remainingIngredients)
    navigate('/kitchen')
  }
 
  const displayIngredients =  ingredients? ingredients.map((ingredient) => {
    return(
        <div key={ingredient._id}>
          <Card>
            <h1>{ingredient.name}</h1>
            {/* <img>{ingredient.image}</img> */}
            <div>
              <Link to={`/editingredient/${ingredient._id}`} key={ingredient.id} onClick={ingredientInFocus} >Edit</Link>
              <Link to={`/showingredient/${ingredient._id}`} key={ingredient._id} >View</Link>
              <Button onClick= {() => deleteIngredient(ingredient._id)}>Delete</Button> 
          </div> 
        </Card>
        </div>
    )
  }): null 

  return (
    <div>
        <h1>Kitchen</h1>
        {displayIngredients}
        <Button>
          <Link to={'/newingredient'}>Add Ingredient</Link>
        </Button>
    </div>

  )
}

export default Kitchen