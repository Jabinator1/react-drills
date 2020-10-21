import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      appleProductsArr: ["iPhone", "AirPods Pro", "iMac", "Macbook Pro", "AppleTV", "HomePod"],
      filteredProducts: ""
    }
  }

  changeHandler(letter){
    this.setState({
      filteredProducts: letter
    })
  }
  render() {
    const appleProducts = this.state.appleProductsArr
    .filter(product => product.includes(this.state.filteredProducts))
    .map(product => <h2>{product}</h2> )

    return (
      
      <div className="App">
        <input onChange={e => this.changeHandler(e.target.value)}/>
        {appleProducts}
      </div>
    )
  }
}

export default App;
