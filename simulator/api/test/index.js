const express = require('express')
const router = express.Router()

let info = {
    name: 'lfm',
    age: 20
}

router.get('/', (req, res) => {
    res.send(info)
})
router.post('/', (req, res) => {
    // let age = req.body.age
    // let name = req.body.name
    let {age, name} = req.body
    info.age = age || info.age
    info.name = name || info.name
    res.send(info)
})

module.exports = router