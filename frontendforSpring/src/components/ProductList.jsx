import React from 'react';
import axios from 'axios';

export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {

    axios.get(`http://localhost:8080/allproducts`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.products
            .map(product =>
              <li key={product.prodId}><p>{product.prodName}    {product.prodId}</p></li>
            )
        }
      </ul>
    )
  }
}