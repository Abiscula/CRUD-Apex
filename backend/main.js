const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(3001, () => {
    console.log('Server ON')
})

app.get('/', (req, res) => {
    res.send('<h1>Olá Mundo!</h1>')
})

app.post('/login', (req, res) => {
    const { user, passw } = req.body
    if (user === 'abiscula' && passw === '12345678') {
        res.send('Logado com sucesso!')
    } else {
        res.send('Usuário ou senha inválidos')
    }
})