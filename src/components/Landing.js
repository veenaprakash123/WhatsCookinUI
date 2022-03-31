import React from 'react'
import './CSS/General.css'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'> 
        <div>
            <Link to='/kitchen'><h3>Kitchen</h3></Link>
        </div>
        <div>
            <h3>My Recipe Book </h3>
        </div>
        <div>
            <h3>Ready To Make</h3>
            Add hover with discription
        </div>
        <div>
            <h3>Find New Recipes</h3>
        </div>
    </div>
  )
}

export default Landing