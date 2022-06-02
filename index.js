import express from "express";
import db from "./config/database.js";
import carRoute from "./routes/car.js";
import platRoute from "./routes/plat.js";
import driverRoute from "./routes/driver.js";
import pivotRoute from "./routes/pivot.js";
import trackingRoute from "./routes/tracking.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("Connection error", error);
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
  <div style="text-align:center">
    <div">API Kosme</div>
  </div>
  `);
});
app.use("/car", carRoute);
app.use("/plat", platRoute);
app.use("/driver", driverRoute);
app.use("/pivot", pivotRoute);
app.use("/tracking", trackingRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log("server running at port 5000")
);

module.exports = app;
