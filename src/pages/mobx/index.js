import React, { Component } from 'react'
import { observer } from 'mobx-react'
import UserInfo from './service'
import Time from '../comunication/timer'
 
class MobxExample extends Component {
    constructor (props) {
        super(props)
        this.userInfo = new UserInfo()

    }
    tract () {
        let age = this.userInfo.unSee
        console.log('ddd')
    }
    render() {
        //this.userInfo.unSee
        console.log('render')
        return (
            <div>
                <p>This is mobx example</p>
                <div>My name is {this.userInfo.name}</div>
                <div>My age is {this.userInfo.age}</div>
                <div>The age is {this.userInfo.isOdd ? 'Odd' : 'Even' }</div>
                <div>
                    <button onClick={() => {this.userInfo.addAge()}}>Add</button>
                </div>
                <div>
                    <button onClick={() => {this.userInfo.changeUnsee()}}>Change un-see</button>
                </div>
                <div>{`Time is ${Time.time}`}</div>
            </div>
        )
    }
}

export default observer(MobxExample)

