import React from 'react'
import isAuthenticated from '../../utils/isAuthenticated'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <header>
      <div>Logo</div>
      {isAuthenticated 
        ? <div>Resto del Nav</div>
        : null
      }
    </header>
  )
}

export default NavMenu