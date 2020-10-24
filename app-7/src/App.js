import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList: []
    }
  }

  onClick = word => {
    this.setState({
      todoList: [...this.state.todoList, word],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addWord={this.onClick}/>
        <List todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
