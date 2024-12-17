import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setTodos(res.data);
    });
  }, [todos]);

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/${id}`).then((res) => {
      console.log(res);
    });
  };

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
                className="bg-black text-white rounded my-2 p-2 px-5 relative"
              >
                <span
                  className="absolute left-1 w-3 h-3 bg-white rounded-full flex justify-center items-center top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setDone(!done)}
                >
                  <IoMdCheckmark
                    className={`${done ? "block" : "hidden"} text-black`}
                  />
                </span>
                <span
                  className={`${
                    done ? "after:w-full" : "after:w-0"
                  } duration-300 transition-all after:left-0 relative after:absolute after:top-1/2 after:-translate-y-[20%] after:h-0.5 after:bg-slate-600`}
                >
                  {todo.title}
                </span>
                <RiDeleteBinLine
                  className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => deleteTodo(todo._id)}
                />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
