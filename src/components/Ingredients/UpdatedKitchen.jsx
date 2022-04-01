import React from 'react'
import {useState, useEffect} from 'react'
import Datatable from './datatable'

require("es6-promise").polyfill()
require("isomorphic-fetch")


const UpdatedKitchen = () => {

  const[data, setData] = useState([])
  const [q, setq] = useState("")

  useEffect(()=> {
    fetch('http://localhost:4000/kitchen')
    .then(response => response.json())
    .then((json)=> setData(json))
    .then(console.log(data))
  }, [])


  return (
    <div>
      <div>UpdatedKitchen</div>

      <div>
        <Datatable data={data}>

        </Datatable>
      </div>


    </div>
  )
}

export default UpdatedKitchen