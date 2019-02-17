// Update with your config settings.
require("dotenv").config();

const localPgConnection = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
};

const dbConnection =
  process.env.HEROKU_POSTGRESQL_ORANGE_URL || localPgConnection;

module.exports = {
  development: {
    client: "pg",
    connection: localPgConnection,
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
