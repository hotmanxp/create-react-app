import React, { Component } from 'react';
import './App.css'; 
import Footer from './components/foot-bar'
import Routes from './routers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        
        <Footer />
      </div>
    );
  }
}

export default App;
