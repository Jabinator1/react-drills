import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      userInput: ""
    }
  }

  handleChange(e) {
    this.setState({
      userInput: e
    })
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}/>
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
