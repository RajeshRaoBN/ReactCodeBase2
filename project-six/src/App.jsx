import { FetchEx } from "./hooks/FetchEx"
import Contextex from "./hooks/use-context/Contextex"
import Effectex from "./hooks/use-effect/Effectex"
import { ImperativeHandleEx } from "./hooks/use-imperative-handle/ImperativeHandleEx"
import Rexucerex from "./hooks/use-reducer/Rexucerex"
import Refex from "./hooks/use-ref/Refex"
import { Stateex } from "./hooks/use-state/Stateex"

function App() {

  return (
    <>
      <div>
        {/* <h1>State Hook Example</h1>
        <Stateex />
        <h1>Effect Hook Example</h1>
        <Effectex /> 
        <h1>Context Hook Example</h1>
        <Contextex />
        <h1>Reducer Hook Example</h1>
        <Rexucerex />
        <h1>Ref Hook Example</h1>
        <Refex />
        <h1>Imperative Handle Hook Example</h1>
        <ImperativeHandleEx /> */}
        <h1>Fetch Example</h1>
        <FetchEx />
      </div>
    </>
  )
}

export default App
