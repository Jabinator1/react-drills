import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList: []
    }
  }

  inputChange(e) {

  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.inputChange(e.target.value)} placeholder="Enter a new task" type="text"/>
        <button>Add</button>
      </div>
    )
  }
}

export default App;
