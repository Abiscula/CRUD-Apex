require('dotenv').config()
import { Request, Response } from 'express'
import jwt_decode from 'jwt-decode'
import { tokenUser } from '../@types/customTypes';
const bcrypt = require('bcrypt')
const express = require('express');
const jwt = require('jsonwebtoken'); //cria da autenticação de login
const verifyJWT = require('../Middleware/middleware');
const db = require('../Model/index.ts')
const SECRET = process.env['TOKEN_SECRET']

const router = express.Router();
const salt = bcrypt.genSaltSync(10)



class userController {
    constructor() {
        router.post('/login', this.login)
        router.post('/register', this.register)
        router.get('/user', verifyJWT, this.user)
        router.get('/dashboard', verifyJWT, this.dashboard)
        router.put('/edit', verifyJWT, this.changeUserInfos)
        router.delete('/delete', verifyJWT, this.deleteUser)
    }

    login(req: Request, res: Response) {
        const { user, passw } = req.body 
        db.where({user: user})
            .table("users").then((data: object) => {
                if(Object.keys(data).length > 0) {
                    bcrypt.compare(passw, Object.values(data)[0]['passw'], (err: Error, match: Boolean) => { //comparando senha
                        if(match) {
                            const token = jwt.sign({user: Object.values(data)[0]['user']}, SECRET, { expiresIn: 300 }) //300s (5min)
                            return res.json({auth: true, token});
                        }
                    }) 
                } else {
                    return res.json({auth: false})
                }
            }).catch((err: Error) => {
                console.log(err)
            })
    }

    register(req: Request, res: Response) {
        const { name, email, user, passw, nick } = req.body
        const cryptoPassw = bcrypt.hashSync(passw, salt)
        let values = {
            name: name,
            email: email,
            user: user,
            passw: cryptoPassw,
            nick: nick
        }

        db.insert(values).into("users").then((data: Array<number>) => {
            res.send("Usuário cadastrado com sucesso!")
        }).catch((err: object) => {
            if(Object.values(err).includes("ER_DUP_ENTRY")) {
                res.send('ERRO: Usuário já cadastrado')
            }
        })
    }

    user(req: Request, res: Response) {
        const token = req.headers['authorization']
        if(token) {
            let { user }: tokenUser = jwt_decode(token)
            db.select().where({user: user}).table("users").then((data: object) => {
                return res.json({auth: true, user_infos: data})
            })
        }
    }


    dashboard(req: Request, res: Response) {
        const token = req.headers['authorization']
        if(token) {
            let { user }: tokenUser = jwt_decode(token)
            db.select('nick').where({user: user}).table("users").then((data: object) => {
                return res.json({auth: true, user_infos: data})
            })
        }
    }

    changeUserInfos(req: Request, res: Response) {
        const { name, email, user, passw, nick } = req.body['user_info']
        const values = {
            name: name,
            email: email,
            passw: passw,
            nick: nick 
        }
        db.update(values).into("users").where({user: user}).then((data: number) => {
            res.send('Dados alterados com sucesso!')
        }).catch((err: Error) => {
            console.log(err)
        })
    }

    deleteUser(req: Request, res: Response) {
        const token = req.headers['authorization'];
        if(token) {
            let { user }: tokenUser = jwt_decode(token)
            db.delete().where({user: user}).table("users")
                .then((data: number) => {
                    res.send('Usuario deletado com sucesso')
                })
        }
    }

}

new userController()

module.exports = router