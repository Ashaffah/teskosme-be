import { Sequelize } from "sequelize";

const db = new Sequelize(
  "heroku_ab4e133ee18e112",
  "b5d1a89c643530",
  "57d2de23",
  {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  }
);
export default db;
