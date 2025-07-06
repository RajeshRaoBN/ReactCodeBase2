import React from 'react';
import axios from 'axios';

export default class Welcome extends React.Component {
  state = {
    greeting: [],
    name: [],
    message: []
  }

  handleInputChange = (e) => {
    this.setState({ name:e.target.value });
  }

  handleSubmit = () => {
    var url = `http://localhost:8000/hello/` + this.state.name
    console.log(url)
    axios.get(url)
      .then(res => {
        const messages = res.data.message;
        this.setState({ message: messages });
      })
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/`)
      .then(res => {
        const greetings = res.data.message;
        this.setState({ greeting: greetings });
      })
  }

  render() {
    return (
        <div>
            <h2>{this.state.greeting}</h2>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder='Enter your name here'
            />
            <button onClick={this.handleSubmit}>Submit</button>
            <h2>{this.state.message}</h2>
        </div>
      
    )
  }
}