const userController = require('./Controller/userController')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const hostname = 'localhost'
const port = 3001

app.use(userController)

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})