import React, { Component } from 'react';
import './style.less'
import Api from '../../lib/api'

class Me extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'lfc',
            age: 100
        }
    }

    async componentDidMount() {
        let result = await Api.fetch('api/test', 'get', {xing: 'chao', ming: 'liang'})
        this.setState({name: result.name, age: result.age})
        
    }

    async changeInfo () {
         let result = await Api.fetch('api/test', 'post', {name: 'lxc', age: 34})
        this.setState({name: result.name, age: result.age})
    }

    async setBack () {
        let result = await Api.fetch('api/test/back')
        this.setState({name: result.name, age: result.age})
    }
    
    render() {
        return (
            <div className='me-page'>
                This is page to show handle simulators
                <div>
                    <button onClick={() => this.changeInfo()}>Change</button>
                    <button onClick={() => this.setBack()}>Set Back from server</button>
                </div>
                <div className="sub-box">
                    {'name: ' + this.state.name}
                    <br />
                    {'age: ' + this.state.age}
                </div>
            </div>
        );
    }
}

export default Me