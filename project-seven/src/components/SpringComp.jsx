import React from 'react';
import axios from 'axios';

export default class SpringComp extends React.Component {
  state = {
    greetings: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/greetings`)
      .then(res => {
        const greetings = res.data;
        this.setState({ greetings });
      })
  }

  render() {
    return (
      <div>
        {
            <h2 className='text-center'>{this.state.greetings}</h2>
        }
      </div>
    )
  }
}