import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Service from './service'
import Time from '../comunication/timer'
 
class MobxExample extends Component {
    render() {
        return (
            <div>
                <p>This is mobx example</p>
                <div>My name is {Service.name}</div>
                <div>My age is {Service.age}</div>
                <div>The age is {Service.isOdd ? 'Odd' : 'Even' }</div>
                <div>
                    <button onClick={() => {Service.addAge()}}>Add</button>
                </div>
                <div>{`Time is ${Time.time}`}</div>
            </div>
        )
    }
}

export default observer(MobxExample)

