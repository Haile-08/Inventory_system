import { Application } from "express";

const express = require("express");
const mongoose = require("mongoose");

const app: Application = express();
const PORT = process.env.PORT || 3500;

// Mongodb connection
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Mongodb connected \n Server Port: ${PORT}`)
    );
  })
  .catch((err: String) => console.log(`${err} did not connect`));
