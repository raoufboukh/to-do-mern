import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setTodos(res.data);
    });
  }, [todos]);

  const addTodo = () => {
    axios.post("http://localhost:3000/add", { title });
    setTitle("");
  };

  return (
    <>
      <div className="w-96 mx-auto my-10">
        <h1 className="text-4xl text-center mb-10">Todo List</h1>
        <div className="flex">
          <input
            className="border-2 border-black rounded py-1 px-2 text-xl basis-[80%]"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="bg-black text-white rounded px-2 basis-[20%]"
            onClick={() => addTodo()}
          >
            Add
          </button>
        </div>
        <div>
          {todos.map((todo) => {
            return (
              <p
                key={todo._id}
                className="border-2 border-black rounded my-2 p-2"
              >
                {todo.title}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
