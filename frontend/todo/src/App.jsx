import { useState, useEffect } from "react";

import CreateTodo from "./component/CreateTodo";
import Todos from "./component/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    return async () => {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      // console.log(data);
      setTodos(data);
    };
  }, []);
  console.log(todos);
  return (
    <div className="flex flex-col">
      <div className="font-Caveat text-center text-8xl pt-10">My Todo List</div>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  );
}

export default App;
