import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Tracking = db.define(
  "tracking",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    armada_id: { type: DataTypes.INTEGER },
    driver_id: { type: DataTypes.INTEGER },
    plat_id: { type: DataTypes.INTEGER },
    kendaraan_id: { type: DataTypes.INTEGER },
    start_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    finish_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
export default Tracking;
