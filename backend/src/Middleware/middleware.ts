import { Response, NextFunction } from 'express'
import { ReqUserType } from "../customTypes"
import jwt from 'jsonwebtoken'

export const auth = {
    secret: String(process.env['TOKEN_SECRET'])
}

function verifyJWT(req: ReqUserType, res: Response, next: NextFunction): void {
    const token = req.headers['authorization'];
    if(token) {
        jwt.verify(token, auth.secret, (err: any, decoded: any) => {
            if(err) {
                return res.status(401).end();
            }
                
            req.user = decoded.user;
            next();
        })
    }
}

module.exports = verifyJWT