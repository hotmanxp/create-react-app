//import {browserHistory} from 'react-router'
const location = window.location
export default {
    go (path) {
        let completepath = 'http://localhost:3000/#' + path
        location.href = completepath
    }
}