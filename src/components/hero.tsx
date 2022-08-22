import React from 'react'
import ReactTyped from 'react-typed'

import './hero.css'

export default function hero() {
    const traits= [
        'Software Engineer',
        'Frontend Developer',
        'Research Student'
    ]
  return (
    <div className='hero'>
        <h2 className='introText'>Hello to my portfolio</h2>
        <h2 className='introText'>I am among other things...</h2>
        <ReactTyped className='typedText' typeSpeed={50} backSpeed={50}
        backDelay={1000} strings ={traits} loop />


    </div>
  )
}
