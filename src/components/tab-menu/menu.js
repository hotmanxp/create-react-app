import React from 'react'
import Home from '../../pages/home'
import Shop from '../../pages/shop'
import Me from '../../pages/me'
import Watch from '../../pages/watch'
export default [
    {
        text: 'Home',
        link: '/home',
        Cmp: Home
    },
    {
        text: 'Shop',
        link: '/shop',
        Cmp: Shop
    },
    {
        text: 'My watch',
        link: '/watch',
        Cmp: Watch
    },
    {
        text: 'Me',
        link: '/me',
        Cmp: Me
    },
    {
        text: 'Test',
        link: '/test',
        Cmp: () => <div>Test</div>
    }
]