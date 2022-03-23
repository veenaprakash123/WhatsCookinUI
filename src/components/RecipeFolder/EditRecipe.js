import React from 'react'
import { useState } from 'react'

const EditRecipe = () => {

    // let array = ['A','B','C']

    const [array, setArray] = useState(['A','B','C'])

    function newArray(){
        let arrayTwo = array.map((i, index) => {
            return (
                <h1>{i} and the index is {index}</h1>
            )
        })
        console.log(arrayTwo)
    } 



  return (
    <div>
        {newArray()}
    </div>
  )
}

export default EditRecipe