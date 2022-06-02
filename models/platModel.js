import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Plat = db.define(
  "plat",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    plat_name: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
export default Plat;
