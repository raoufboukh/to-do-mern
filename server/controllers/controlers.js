import todo from "../models/todo.js";

export const controllersPost = (req, res) => {
  const { title } = req.body;
  //   const todos = new todo({
  //     title,
  //   });
  //   todos.save().then(() => {
  //     res.send("Todo added");
  //   });
  todo
    .create({ title })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

export const controllersGet = (req, res) => {
  todo.find().then((data) => {
    res.send(data);
  });
};
