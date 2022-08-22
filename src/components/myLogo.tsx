import React from 'react'
import infinity from '../infinity.svg'
import greaterThan from '../greater-than-solid.svg'
import lessThan from '../less-than-solid.svg'
import forwardSlash from '../forward-slash.svg'

export default function myLogo() {

  const g = {height : '2rem', display : 'inline', color : 'red'}
  return (
    <ul>
        <li><img style={g} src={lessThan} alt="d" /></li>
        <li><img style={g} src={infinity} alt="b" /></li>
        <li><img style={g} src={forwardSlash} alt="c" /></li>
        <li><img style={g} src={greaterThan} alt="a" /></li>
    </ul>
  )
}
