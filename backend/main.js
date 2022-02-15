const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.listen(3001, () => {
    console.log('Server ON')
})

app.get('/', (req, res) => {
    res.send('<h1>Olá Mundo!</h1>')
})

app.post('/', (req, res) => {
    res.send(req.body)
})