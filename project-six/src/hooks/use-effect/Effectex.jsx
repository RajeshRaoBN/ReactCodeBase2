import { React, useEffect, useState } from 'react'

const Effectex = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
    }, [])

    useEffect(() => {
        console.log("Pedro")
    }, [show])
  return (
    <div>
        <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
        <h1>Posts</h1>
        <ul>
            {data.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Effectex