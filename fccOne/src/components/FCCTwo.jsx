import React from 'react'
import myLogo from '../assets/react.svg'
import "../index.css"

function FCCTwo() {
  return (
    <div>
      <header className='header'>
        <img src={myLogo} width="40px" />
        <Nav />
      </header>
        <ol>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ol>
    </div>
  )
}

function Nav() {
  return (
    <nav className='nav-list'>
      <ul>
        <li className='nav-list-item'>Pricing</li>
        <li className='nav-list-item'>About</li>
        <li className='nav-list-item'>Contact</li>
      </ul>
    </nav>
  )
}

export default FCCTwo