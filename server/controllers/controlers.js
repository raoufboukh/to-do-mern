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


export const controllersDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todo.findByIdAndDelete(id);
    if (result) {
      res.status(200).send("Todo deleted");
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};