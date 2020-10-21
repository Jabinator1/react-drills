import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg" />
      </div>
      );
    }
}

export default App;
