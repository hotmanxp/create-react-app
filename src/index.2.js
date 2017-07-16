import React, { Component } from 'react';
import menus from './menu.js'
import './style.css'
import {Link} from 'react-router-dom'
import historyTool from '../router'

class Tabs extends Component {
    render() {
        return (
            <div className='menu-tab'>
               {
                 menus.map(menu => 
                 <Tab key={menu.text} text={menu.text} link={menu.link}/>)  
               } 
            </div>
        );
    }
}

const Tab = ({text, link}) => <div className='tab' onClick={() => historyTool.go(link)}> 
    {text}
</div>

export default Tabs;