import React, { Component } from 'react';
import menus from './menu.js'

class Tabs extends Component {
    render() {
        return (
            <div className='tab-menu'>
               {
                 menus.map(menu => <div key={menu.text}>
                        {menu.text}
                     </div>)  
               } 
            </div>
        );
    }
}

export default Tabs;