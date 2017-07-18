import React from 'react'
import Home from '../../pages/home'
import Shop from '../../pages/shop'
import Me from '../../pages/me'
import Watch from '../../pages/watch'
import Mobx from '../../pages/mobx'
import Comunication from '../../pages/comunication'
export default [
    {
        text: 'Home',
        link: '/home',
        Cmp: Home
    },
    {
        text: 'nest route',
        link: '/nest-route',
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
        text: 'Mobx',
        link: '/mobx',
        Cmp: Mobx
    },
    {
        text: 'Comunication',
        link: '/comunication',
        Cmp: Comunication
    },
    {
        text: 'Test',
        link: '/test',
        Cmp: () => <div>Test</div>
    }
]