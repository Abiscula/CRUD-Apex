require('dotenv/config')
const Knex = require('knex')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const knexClient = Knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: process.env['DB_USER'],
        password: process.env['DB_PASSW'],
        database: process.env['DB_DATABASE']
    }
})

console.log(knexClient)

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

app.post('/register', (req, res) => {
    const { user, passw, nick } = req.body
    
})