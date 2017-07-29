import React from 'react'
import Home from '../../pages/home'
import Shop from '../../pages/shop'
import Me from '../../pages/me'
import Watch from '../../pages/watch'
import Mobx from '../../pages/mobx'
import Comunication from '../../pages/comunication'
import AntD from '../../pages/antd'
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
        text: 'Redux',
        link: '/redux-example',
        Cmp: Watch
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
        text: 'API',
        link: '/api-server',
        Cmp: Me
    },
    {
        text: 'Antd',
        link: '/ant-design',
        Cmp: AntD
    },
    {
        text: 'Test',
        link: '/test',
        Cmp: () => <div>Test</div>
    }
]