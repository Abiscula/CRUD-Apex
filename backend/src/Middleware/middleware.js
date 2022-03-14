const jwt = require('jsonwebtoken')
const SECRET = process.env['TOKEN_SECRET']


function verifyJWT(req, res, next) {
    const token = req.headers['authorization'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).end();
        }
            
        req.user = decoded.user;
        next();
    })
}

module.exports = verifyJWT