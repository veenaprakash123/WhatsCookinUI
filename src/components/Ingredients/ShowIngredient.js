import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const ShowIngredient = ({ingredient, setIngredient}) => {



    let {id} = useParams()
  
    useEffect(()=> {
      const showDetails = async() => {
        let  ingredientResponse = await fetch('http://localhost:4000/kitchen/details/' + id) 
        let json = await ingredientResponse.json()
        setIngredient(json)
      }
      showDetails()
      console.log(ingredient)
    }, [id]) 





  return (
    <div>
        <Button >
            <Link to='/kitchen' style={{ color:'white', textDecoration: 'none' }}>
            Return to Kitchen
          </Link>
        </Button>
        <div>
            <h1>{ingredient.name}</h1>
            <h3>{ingredient.amount}</h3>
            <h3>{ingredient.location}</h3>
            <h3>{ingredient.image}</h3>
        </div>
    </div>
  )
}

export default ShowIngredient