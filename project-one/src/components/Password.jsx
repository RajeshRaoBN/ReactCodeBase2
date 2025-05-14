import React from 'react'
  
function Password({ isvalid }) {
    const exp = isvalid ? "Valid Passport" : "Invalid Passport"

    return <div>
            {exp}
           </div>
}

export default Password