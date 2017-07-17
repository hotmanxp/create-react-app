import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import {Tab1, Tab2, Tab3} from './sub-tabs'
import './style.css'

class Shop extends Component {
    
    render() {
        let subMenu = new Array(5)
        subMenu.fill('s')
        let { match } = this.props
        return (
            <div className='me-page'>
                This is page to show how to implement nest route
                {subMenu.length}
                <div className='sub-menu'>
                    {subMenu.map((i, idx) => <Link to={`${match.url}/tab${idx + 1}`} className="subTab" key={idx + 'router'}>
                        {idx + 1 + 'TAB'}
                        </Link>
                    )}
                </div>
                <div>
                    <Route path={`${match.url}/tab1`} component={Tab1}></Route>
                    <Route path={`${match.url}/tab2`} component={Tab2}></Route>
                    <Route path={`${match.url}/tab3`} component={Tab3}></Route>
                </div>
            </div>
        );
    }
}

export default Shop;