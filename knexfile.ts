import { config } from "dotenv";

config()

module.exports = {
  development: {
    client: 'mysql2',
    connection: process.env.DATABASE,
    migrations: {
      tableName: 'migrations',
      extension: 'ts'
    },
    useNullAsDefault: true
  }
}