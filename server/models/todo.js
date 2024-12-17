import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
});

const todo = mongoose.model("todo", schema);

export default todo;