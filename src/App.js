import React, { Component } from 'react';
import './App.css'; 
import Footer from './components/foot-bar'
import Routes from './routers'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers';
import {createStore} from 'redux'
const initState = {}
const store = createStore(rootReducer, initState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Routes />
        
        <Footer />
      </div>
      </Provider>
    );
  }
}

export default App;
