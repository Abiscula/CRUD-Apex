const express = require('express');
const router = express.Router();
const db = require('../Model/db')

class userController {
    constructor() {
        router.post('/login', this.login)
        router.post('/register', this.register)
    }

    login(req, res) {
        const { user, passw } = req.body
        db.where({user: user})
            .where({passw: passw})
            .table("new_table").then(data => {
                if(data.length > 0) {
                    res.send('Logado com sucesso!')
                } else {
                    res.send('Usuário ou senha inválidos')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    register(req, res) {
        const { user, passw, nick } = req.body
        let values = {
            user: user,
            passw: passw,
            nick: nick
        }

        db.insert(values).into("new_table").then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
    }
}

new userController()

module.exports = router