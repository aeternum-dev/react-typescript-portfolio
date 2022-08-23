import React from 'react'
import './navbar.css'
import logo from '../aeternum-logo.svg'

export default function navbar() {
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <ul className='navtable-warpper'>
        <li>About</li>
        <li>Timeline</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </nav>
  )
}
