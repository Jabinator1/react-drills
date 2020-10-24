import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList: [],
      word: ""
    }
  }

  inputChange = letter => {
    this.setState({
      word: letter
    })
  }

  onClick = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.word],
      word: ""
    })
  }
  render() {

    const list = this.state.todoList.map(item => {
      return <p>{item}</p>
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.inputChange(e.target.value)} placeholder="Enter a new task" type="text"/>
        <button onClick={this.onClick}>Add</button>
        {list}
      </div>
    )
  }
}

export default App;
