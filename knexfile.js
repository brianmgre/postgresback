// Update with your config settings.
require("dotenv").config();

const localPgConnection = {
  host: "localhost",
  database: "lambda",
  user: "postgres",
  pass: "123",
  charset: "utf8"
};

const dbConnection =
  process.env.HEROKU_POSTGRESQL_ORANGE_URL || localPgConnection;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "lambda",
      user: "process.env.USER",
      password: "process.env.PASSWORD",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    },
    useNullAsDefault: true
  }
};
