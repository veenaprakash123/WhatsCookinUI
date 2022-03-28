import React from 'react'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import './CSS/General.css'

const Welcome = () => {


  let navigate = useNavigate()

  return (
    <div className='body-red' style={{height: 700}}>

      <div className="welcome" >
      <h1 style={{fontSize:'70px'}}>Welcome!</h1>
      </div>

      <div className='intro-text'>  
        <p>What's Cookin' is a place where you can keep track of the ingredients in your kitchen, store personal recipes, and find recipes that include items you already own! Why go out to eat often, when there are so many recipes at your fingertips? 
          <br></br>
          <br></br>
        This app encourages it's users to cook their own meals, not let their perishable ingredients go to waste, and save money. If you don't have an account already, Register to see what's cookin today! </p>
      </div>

      <div className='welcome-buttons'>
        <div >
            <Button onClick={()=> navigate('/session/login')} variant="dark">Login</Button>
        </div>

        <div style={{marginLeft: '12%'}}>
            <Button onClick={()=> navigate('/session/register')} variant="dark">Register</Button>
        </div>
      </div>

    </div>
  )
}

export default Welcome