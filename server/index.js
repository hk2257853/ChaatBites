import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js"
import menuRoutes from "./routes/menu.js"
import parkingRoutes from "./routes/parking.js"
import cartRoutes from "./routes/cartroute.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1300;

app.use("/user", userRoutes);
app.use("/menu", menuRoutes);
app.use("/parking", parkingRoutes)
app.use("/cart", cartRoutes)

// const CONNECTION_URL = "mongodb://0.0.0.0:27017/ChaatBites"; // for non-dockerized app
// const CONNECTION_URL = "mongodb://mongo:27017/PS3DB"; // for dockerized app
const CONNECTION_URL = "mongodb+srv://test:test@cluster0.wmpaxgm.mongodb.net/?retryWrites=true&w=majority"; // for non-dockerized app

// mongodb+srv://<username>:<password>@cluster0.wmpaxgm.mongodb.net/?retryWrites=true&w=majority
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
  