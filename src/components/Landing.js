import React from 'react'
import './CSS/General.css'
import {Link} from 'react-router-dom'
import './CSS/General.css'

const Landing = () => {
  return (
      <div className='body larger-container'>
        <div className='landing'> 

            <div className='child child-1' id='kitchen-tile'>
                <Link to='/kitchen' style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Kitchen</h3></Link>
            </div>

            <div className='child child-2' id='recipebook-tile'>
                <Link to='/recipebook' style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>My Recipe Book </h3></Link>
            </div>

            <div className='child child-3' id='readytogo-tile'>
                <Link to='/readytogo' style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Ready To Make</h3></Link>
                
            </div>

            <div className='child child-4' id='findrecipe-tile'>
                <Link to='/findrecipe' style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Find New Recipes</h3></Link>
            </div>

        </div>
    </div>
  )
}

export default Landing