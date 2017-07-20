import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Link to='/mobx' >To Mobx</Link>
                    You can import resource, css, less now, and code is hot reload!
                </p>
            </div>
        );
    }
}

export default Home;