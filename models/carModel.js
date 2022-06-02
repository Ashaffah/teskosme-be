import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Car = db.define(
  "kendaraan",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tipe: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
export default Car;
