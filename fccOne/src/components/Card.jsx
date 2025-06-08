import React from 'react'
import reactLogo from '../assets/react.svg'
import "../index.css"

function Card() {
  return (
    <main>
        <img src={reactLogo} width="40px" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by jordan Walke</li>
            <li>Has well over 200k stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}

export default Card