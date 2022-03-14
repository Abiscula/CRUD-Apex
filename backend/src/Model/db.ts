require('dotenv').config()

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: process.env['DB_USER'],
        password: process.env['DB_PASSW'],
        database: process.env['DB_DATABASE']
    }
})

module.exports = knex