import { React, useState, createContext, useContext } from 'react'

export const GlobalStateContext = createContext(null)
const Contextex = () => {
    const [isToggle, setIsToggle] = useState(false)
  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle}}>
        <div>
            <h1>Parent Component</h1>
            <ChildToggle />
            <ChildDisplay />
        </div>
    </GlobalStateContext.Provider>
  )
}

const ChildToggle = () => {
    const { setIsToggle } = useContext(GlobalStateContext)
  return (
    <div>
        <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  )
}

const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalStateContext)
  return (
    <div>
        <p>Current State: {isToggle ? "ON":"OFF"}</p>
    </div>
  )
}



export default Contextex