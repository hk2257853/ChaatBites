import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js"
import menuRoutes from "./routes/menu.js"
import parkingRoutes from "./routes/parking.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1300;

app.use("/user", userRoutes);
app.use("/menu", menuRoutes);
app.use("/parking", parkingRoutes)

const CONNECTION_URL = "mongodb://0.0.0.0:27017/ChaatBites"; // for non-dockerized app
// const CONNECTION_URL = "mongodb://mongo:27017/PS3DB"; // for dockerized app

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
    console.log("Server started on 1300");
  });
  