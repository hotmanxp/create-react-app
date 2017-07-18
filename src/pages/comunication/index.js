import React, { Component } from 'react';
import Timer from './timer'
import { observer } from 'mobx-react'

class Comunication extends Component {
    render() {
        return (
            <div>
                <p>This is a page to show component comunicate by mobx</p>
                <div>
                    <div><button onClick={() => Timer.toggle()}>{Timer.isRunning ? 'Stop' : 'Start'}</button></div>
                    <div><button onClick={() => Timer.reset()}>Reset</button></div>
                </div>
            </div>
        );
    }
}

export default observer(Comunication)
