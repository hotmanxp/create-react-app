import React, { Component } from 'react';
import menus from './menu.js'
import './style.css'
import {NavLink as Link} from 'react-router-dom'


class Tabs extends Component {
    render() {
        return (
            <div className='menu-tab'>
                {menus.map(menu => <Link activeStyle={{color: 'white'}} className='tab' key={menu.link} to={menu.link}>{menu.text}</Link>)}

            </div>
        );
    }
}


export default Tabs;