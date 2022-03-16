require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: process.env['DB_USER'],
      password: process.env['DB_PASSW'],
      database: process.env['DB_DATABASE']
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/Model/migrations`
    }
  }
};
