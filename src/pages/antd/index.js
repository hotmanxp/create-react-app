import React, { Component } from 'react'
import 'antd/dist/antd.less'
import './style.less'
import { DatePicker, InputNumber, Button } from 'antd'
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom'

class AntD extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        let div = document.createElement('div')
        let div2 = document.createElement('div')
        div.setAttribute('id', 'createElm')
        div2.setAttribute('id', 'createElm2222')
        div.appendChild(div2)
        let body = document.getElementsByTagName('body')[0]
        body.appendChild(div)
        this.state = {
            num: 10
        }
    }
    inputChange (value) {
        this.setState({inputValue: value})
    }
    consoless (e) {
        this.setState({num: this.state.num + 10}, () => {
            this.createDiv()
        })
    }
    createDiv (target) {
        let domTarget = findDOMNode(this.refs.createBtn)
        let rect = domTarget.getBoundingClientRect()
        let {left, bottom} = rect
        let div = <div className="testDiv"  style={{position: 'absolute', left: left, top: bottom}}>
            <Button onClick={(e) => this.consoless(e)}>this is in another element {this.state.num}</Button>
        </div>
        render(div, document.getElementById('createElm'))
    }
    distroy () {
        unmountComponentAtNode(document.getElementById('createElm'))
    }
    render() {
        return (
            <div className='antd-page'>
                <p className='title'>This is a page to show Ant-design libreray</p>
                <div className='section'>
                    <p>DatePicker</p>
                    <DatePicker />
                </div>
                <div className="section">
                    <p>Input Number</p>
                    <InputNumber value={this.state.inputValue} defaultValue={78} max={100} size='small' precision={2} onChange={(value) => this.inputChange(value)}/>
                </div>
                <div className="createDiv">
                    <Button onClick={() => this.createDiv()} ref='createBtn'>Create</Button>
                    <Button onClick={() => this.distroy()}>Destroy</Button>
                </div>
            </div>
        )
    }
}

export default AntD
