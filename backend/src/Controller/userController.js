require('dotenv').config()
const express = require('express');
const router = express.Router();
const db = require('../Model/db')
const jwt = require('jsonwebtoken'); //cria da autenticação de login
const verifyJWT = require('../Middleware/middleware');
const SECRET = process.env['TOKEN_SECRET']

class userController {
    constructor() {
        router.post('/login', this.login)
        router.post('/register', this.register)
        router.post('/user', verifyJWT, this.user)
        
    }

    login(req, res) {
        const { user, passw } = req.body 
        db.where({user: user})
            .where({passw: passw})
            .table("users").then(data => {
                if(data.length > 0) {
                    const token = jwt.sign({user: data[0]['user']}, SECRET, { expiresIn: 300 }) //300s (5min)
                    return res.json({auth: true, token});
                } else {
                    return res.json({auth: false})
                }
            }).catch(err => {
                console.log(err)
            })
    }

    register(req, res) {
        const { name, email, user, passw, nick } = req.body
        let values = {
            name: name,
            email: email,
            user: user,
            passw: passw,
            nick: nick
        }

        db.insert(values).into("users").then(data => {
            res.send("Usuário cadastrado com sucesso!")
        }).catch(err => {
            if(err.code == "ER_DUP_ENTRY") {
                res.send('ERRO: Usuário já cadastrado')
            }
        })
    }

    user(req, res) {
        res.send('Usuário possui permissão de acesso')
    }
}

new userController()

module.exports = router