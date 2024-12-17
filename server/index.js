import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const db = "mongodb://localhost:27017/";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(db).then(() => {
  console.log("Database connected");
  app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
  });
});