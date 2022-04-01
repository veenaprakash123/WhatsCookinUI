import React from 'react'
import './CSS/General.css'
import {Link} from 'react-router-dom'
import './CSS/General.css'

const Landing = () => {
  return (
    <div className='landing'> 

        <div className='child' id='kitchen-tile'>
            <Link to='/kitchen'><h3>Kitchen</h3></Link>
        </div>

        <div className='child' id='recipebook-tile'>
            <Link to='/recipebook'><h3>My Recipe Book </h3></Link>
        </div>

        <div className='child' id='readytogo-tile'>
            <Link to='/readytogo'><h3>Ready To Make</h3></Link>
            
        </div>

        <div className='child' id='findrecipe-tile'>
            <Link to='/findrecipe'><h3>Find New Recipes</h3></Link>
        </div>

    </div>
  )
}

export default Landing