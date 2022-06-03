import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Car from "./carModel.js";
import Plat from "./platModel.js";
import Armada from "./armadaModel.js";

const { DataTypes } = Sequelize;
const Pivot = db.define(
  "pivot",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    armada_id: { type: DataTypes.INTEGER },
    kode_id: { type: DataTypes.INTEGER },
    plat_id: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

Pivot.belongsTo(Car, { foreignKey: "kode_id" });
Pivot.belongsTo(Plat, { foreignKey: "plat_id" });
Pivot.belongsTo(Armada, { foreignKey: "armada_id" });

export default Pivot;
