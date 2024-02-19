import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <Link to='/'>
        <p>FlowHome</p>
        </Link>
        
        <nav>
            <p>Sign In</p>
    
        </nav> 
    </div>
  )
}

export default Header