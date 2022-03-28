import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap'

const Register = () => {

    const [user, setUser] = useState({
        username: '',  
        password: '',
        confirmPassword: '',
        allergyOrIntolerance: '',
        valid: null
      });


    const[createUser, setCreateUser] = useState(user)
    const[message, setMessage] = useState('')
   
    let navigate = useNavigate()

    let handleSubmit = (e) =>{

      e.preventDefault()
 
      fetch('http://localhost:7200/session/register', {
          method: "POST", 
          body: JSON.stringify(createUser),
          headers: {
            'Content-Type':'application/json'
          }
        })
        .then((res)=> {
          return(
            res.json()
          )
        })
        .then((data)=> {
          console.log(data)
          if (data.status === 200){
            // setToast(createUser.username)
            navigate('/entries')
          } else if (data.status === 400){
              setMessage(data.msg)
            } 
          })
      }

      let handleChange = (e) => {
        setCreateUser({...createUser,[e.target.id]:e.target.value})
     }





  return (
    <div>
      <h1 className='main-header'>Register</h1>
      <Form onSubmit={handleSubmit} method="POST" style={{marginTop: 70}}>


        <Form.Group className="mb-3 formfields" controlId="formGroupEmail">
          <Form.Label className="label">Name:</Form.Label>
          <Form.Control type="text" id="name" name="name" placeholder="Ex: Taylor Swift" onChange={handleChange}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 formfields" controlId="formUsername">
          <Form.Label className="label">Username: </Form.Label>
          <Form.Control type="text" id="username" name="username" placeholder="Ex: Swiftie" onChange={handleChange}></Form.Control>
        </Form.Group>  
        
    

        <Form.Group className="mb-3 formfields" controlId="formPassword">
          <Form.Label className="label">Password:</Form.Label>
          <Form.Control type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange}></Form.Control>
        </Form.Group>
       
    

        <Form.Group className="mb-3 formfields" controlId="formGroupEmail">
          <Form.Label className="label">Confirm Password:</Form.Label>
          <Form.Control type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></Form.Control>
        </Form.Group>
       

          <Button size="lg" className="register-button enter" value="Register" type="submit" variant="dark">Register</Button>
          <p>{message}</p> 
      </Form>
    </div>
  )
}

export default Register