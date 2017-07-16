import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import menus from './components/tab-menu/menu'
import Tabs from './components/tab-menu'

const Routes = () => <Router>
        <div>
            <Tabs />
            {menus.map(menu => <Route key={menu.link} component={menu.Cmp} path={menu.link} />)}
        </div>
    </Router>


export default Routes;