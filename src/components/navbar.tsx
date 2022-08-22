import React from 'react'
import './navbar.css'
import logo from '../aeternum-logo.svg'

export default function navbar() {
  return (
    <nav>
        <ul className='navtable-warpper'>
          <li> <img src={logo} alt="aeternum"/> </li>
          <li>About</li>
          <li>Timeline</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
    </nav>
  )
}
