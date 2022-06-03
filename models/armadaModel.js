import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Armada = db.define(
  "armada",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nama_armada: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
export default Armada;
