import mongoose from "mongoose";

const schema = new mongoose.schema({
  title: String,
});

const todo = mongoose.model("todo", schema);
