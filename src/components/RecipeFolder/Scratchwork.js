import React from 'react'
import { useState } from 'react'

const Scratchwork = () => {

    // let array = ['A','B','C']

    const [ingredientList, setIngredientList] = useState([{ingredient: "naan"}, {ingredient: "garlic"}, {ingredient: "basil"} ])

    const [ingListFinal, setIngListFinal] = useState([])


  const newArray =  ingredientList.map((item) => {
            return(
               item.ingredient
            )
        })


    let doMagic = (newArray) =>{
        setIngListFinal(newArray)
        console.log(newArray)
    }

    console.log(ingListFinal)

  return (
    <div>
        {newArray}
        <button onClick={ () => doMagic(newArray)}>click</button>
        {ingListFinal}
    </div>
  )
}

export default Scratchwork