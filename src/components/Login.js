import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import {Form, Button} from 'react-bootstrap'
import './CSS/General.css'


const Login = ({url}) => {

  const [user, setUser] = useState({
    name: '',
    username: '',  
    password: '',
    confirmPassword: '',
    valid: null

  })

  const[loggedInUser, setLoggedInUser] = useState(user)
  const[message, setMessage] = useState('')

  let navigate = useNavigate()

  let handleChange = (e) => {
    setLoggedInUser({...loggedInUser,[e.target.id]:e.target.value})
  }

  let handleSubmit = (e) =>{
    e.preventDefault()

    fetch(`${url}/session/login`, {
      method: "POST", 
      body: JSON.stringify(loggedInUser),
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
    // setToast(loggedInUser.username)
      navigate('/landing')
    } else if (data.status === 400){
      setMessage(data.msg)
    } 
    })
  }


  return (
    <div>
      <h1 className='main-header'>Login </h1>
      <Form onSubmit={handleSubmit} style={{marginTop: 70}}>
        <Form.Group className="mb-3 formfields" >
           <Form.Label>Username</Form.Label>
           <Form.Control type="username"  id="username"  placeholder="Enter email" className='formfields'/>
         </Form.Group>

        <Form.Group className="mb-3 formfields" >
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" id="password" placeholder="Password" />
        </Form.Group>

         <Button className='enter' variant="dark" type="submit">
           Sign In 
         </Button>
      </Form>
    </div>
  )
}

export default Login