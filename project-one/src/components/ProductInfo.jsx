import React from 'react'

function ProductInfo() {
    var products = [
        {
            name: "Laptop",
            price: "1200",
            availability: "In stock"
        },
        {
            name: "Phone",
            price: "600",
            availability: "In stock"
        },
        {
            name: "Head Phone",
            price: "$120",
            availability: "In stock"
        },
    ]
  return (
    <div>
        {products.map((product) => (
            <div>
                <p>Product name = {product.name}</p>
                <p>Product price = ${product.price}</p>
                <p>Product availability = {product.availability}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductInfo