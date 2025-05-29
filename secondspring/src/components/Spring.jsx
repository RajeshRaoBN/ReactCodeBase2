import React from 'react';
import axios from 'axios';

export default class Spring extends React.Component {
  state = {
    greeting: [], products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/`)
      .then(res => {
        const greeting = res.data;
        this.setState({ greeting });
      })

      axios.get(`http://localhost:8080/api/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
        <div>
            <h2>{this.state.greeting}</h2>

            <ul>
                {
                    this.state.products
            .map(product =>
              <li key={product.id}>{product.name}</li>
            )
                }
            </ul>
        </div>
      
    )
  }
}