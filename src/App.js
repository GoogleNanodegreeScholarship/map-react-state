import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: [1, 2, 3, 4, 5]
    }
  }


  render() {
    return (
      <div className="App">
        <p>{this.state.array.map((number) =>{
          return <p>number {number} </p>
        })} </p>
        <p>{this.state.array.map((number) =>{
          return <th>comumn {number} </th>
        })}</p>
        <h1>{this.state.array.map((number) => {
          return <td style={{display: 'flex'}}>row {number} </td>
        })}</h1>
      </div>
    );
  }
}

export default App;
