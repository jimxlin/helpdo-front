import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
