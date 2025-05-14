import React from 'react'

function Greeting() {
    var name = "John"
    const todayDate = new Date()
  return (
    <div>
        <h1>Good Day {name}</h1>
        <p>Date: {todayDate.toDateString()}</p>
    </div>
  )
}

export default Greeting