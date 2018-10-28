import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ""
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
        {Object.keys(this.state.data).map((key, i) =>
        <div>{key}</div>
        )}
      </div>
    );
  }
}

export default App;
