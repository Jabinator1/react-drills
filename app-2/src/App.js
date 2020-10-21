import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      appleProducts: ["iPhone", "AirPods Pro", "iMac", "Macbook Pro", "AppleTV", "HomePod"]
    }
  }
  render() {
    const apple = this.state.appleProducts.map(element => {
      return <h2>{element}</h2>
    })
    return (
      <div className="App">
        {apple}
      </div>
    )
  }
}

export default App;
