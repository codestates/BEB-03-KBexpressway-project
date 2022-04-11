require("dotenv").config();
const env = process.env;

module.exports = {
  development: {
    username: "root",
    password: env.DATABASE_PASSWORD,
    database: "kbe_dev",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      "freezeTableName": true,
    }
  },
  test: {
    username: "root",
    password: env.DATABASE_PASSWORD,
    database: "kbe_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: env.DATABASE_PASSWORD,
    database: "kbe_pd",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
