require('dotenv').config()
import { Request, Response } from 'express'
import jwt_decode from 'jwt-decode'
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
        router.get('/user', verifyJWT, this.user)
        
    }

    login(req: Request, res: Response) {
        const { user, passw } = req.body 
        db.where({user: user})
            .where({passw: passw})
            .table("users").then((data: any) => {
                if(data.length > 0) {
                    const token = jwt.sign({user: data[0]['user']}, SECRET, { expiresIn: 300 }) //300s (5min)
                    return res.json({auth: true, token});
                } else {
                    return res.json({auth: false})
                }
            }).catch((err: Error) => {
                console.log(err)
            })
    }

    register(req: Request, res: Response) {
        const { name, email, user, passw, nick } = req.body
        let values = {
            name: name,
            email: email,
            user: user,
            passw: passw,
            nick: nick
        }

        db.insert(values).into("users").then((data: any) => {
            res.send("Usuário cadastrado com sucesso!")
        }).catch((err: any) => {
            if(err.code == "ER_DUP_ENTRY") {
                res.send('ERRO: Usuário já cadastrado')
            }
        })
    }

    user(req: Request, res: Response) {
        const token = req.headers['authorization'];
        if(token) {
            let { user }: any = jwt_decode(token)
            db.select().where({user: user}).table("users").then((data: any) => {
                return res.json({auth: true, user_infos: data})
            })
        }
    }
}

new userController()

module.exports = router