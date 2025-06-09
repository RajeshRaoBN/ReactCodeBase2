import { React, useEffect, useRef, useState } from 'react'

const Refex = () => {
    const [count, setCount] = useState(0)
    const previousCount = useRef(0)

    useEffect(() => {
        previousCount.current = count
    }, [count])

  return (
    <div>
        <p>Count: {count}</p>
        <p>Previous Count: {previousCount.current}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  )
}

export default Refex