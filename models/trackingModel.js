import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Car from "./carModel.js";
import Plat from "./platModel.js";
import Armada from "./armadaModel.js";
import Driver from "./driverModel.js";

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
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    finish_time: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Tracking.belongsTo(Car, { foreignKey: "kendaraan_id" });
Tracking.belongsTo(Plat, { foreignKey: "plat_id" });
Tracking.belongsTo(Armada, { foreignKey: "armada_id" });
Tracking.belongsTo(Driver, { foreignKey: "driver_id" });

export default Tracking;
