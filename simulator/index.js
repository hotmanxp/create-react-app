
const express = require('express')
const bodyParser = require('body-parser')
const test = require('./api/test')



const server = express.Router()
server.use('/test', test)

const app = express()
app.use(
	bodyParser.json(),
	bodyParser.urlencoded({
		extended: true
	})
)
// Add headers
app.use((req, res, next) => {
    // Client URL

    // Request methods to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
	res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
	next()
})

app.use('/api/', server)

const port = 8282
app.listen(port, () => {
	console.log(`Server simulator listening on port ${port}`) // eslint-disable-line no-console
})
