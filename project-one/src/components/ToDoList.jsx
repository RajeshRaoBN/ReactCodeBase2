import { React, useState } from 'react'

function ToDoList() {
    var [todo, setTodo] = useState([])
    const [text, setText] = useState('')

    const handleChange = (e) => {
        const values = e.target.value
        setText(values)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodo(todos => ([...todos, text]) )
        setText('')
    }
  return (
    <div>
        <ul>
            {todo.map(to => (
                <li>{to}</li>
            ))} 
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text"
             name="todoInput" 
             value={text}
             placeholder="Type your ToDo item here"
             onChange={handleChange} />
             <input type="submit" value="Submit" />
        </form>
        
    </div>
  )
}

export default ToDoList