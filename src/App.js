import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
