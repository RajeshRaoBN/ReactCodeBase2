import React from 'react'

function Product({name, price}) {
  return (
    <div>
        <h2>Product Name: {name}</h2>
        <p>and costs: ${price}</p>
    </div>
  )
}

export default Product