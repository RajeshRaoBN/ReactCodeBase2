import React from 'react'
import { useState } from 'react';

function Counter() {
    var [count, setCount] = useState(0)
    function handleClick () {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter