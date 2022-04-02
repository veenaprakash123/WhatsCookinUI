import React from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Logout = ({url}) => {

    let navigate= useNavigate()

    const logOut = () => {

        fetch(url+'session/logout', {
          method: "GET",
          body: null,
          headers: {
            'Content-Type':'application/json'
          }
        })
    
        .then((res) => {
          return (
            res.json() 
          )
        })
        .then((data) => {
          if (data.status === 200 ){
            navigate('/welcome')     
          }
        })
    
      }

  return (

    <div>
        <Button variant='dark' onClick={logOut}>Logout</Button>
    </div>
  )
}

export default Logout