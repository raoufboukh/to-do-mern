import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todo", schema);

export default todo;