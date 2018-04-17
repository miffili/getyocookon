import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="teaser">
          <img className="logo" src="icons/chef_big.png" alt="chef's hat as app logo"/>
          <h1>Get yo' cook on!</h1>
          <h2>Stay tuned, as this app is developing over time.</h2>
          <img src="images/swedishchefcooking.gif" alt="gif of The Muppets swedish cook"/>
        </div>
      </div>
    );
  }
}

export default App;
