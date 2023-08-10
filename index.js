import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductsRoute from "./routes/products.js";
import Postsroute from "./routes/users.js";

import orderRoute from "./routes/order.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Define routes here using app.get(), app.post(), etc.

app.use("/api/products", ProductsRoute);
app.use("/api/users", Postsroute);

app.use("/api/order", orderRoute);

// ENSURE THE SERVER IS AWAKE WITH CRONJOBS

app.get("/wake-up", (req, res) => {
  res.json({
    responseType: "success",
    message: "Server is awake",
  });
});

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongo db");
    app.listen(8700, () => {
      console.log("connected to backend");
    });
  })
  .catch((error) => {
    console.log(error);
  });
