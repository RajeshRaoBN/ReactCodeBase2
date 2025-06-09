import { React, useState } from 'react'

export const Stateex = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    console.log(count)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}
