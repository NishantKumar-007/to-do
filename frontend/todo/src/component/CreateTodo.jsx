/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todos = props.todos;
  const setTodos = props.setTodos;
  return (
    <div className="flex justify-between p-10 mx-40">
      <div>
        <input
          className=" w-60 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-teal-500"
          type="text"
          placeholder="What are you planning today?"
          onChange={(e) => {
            const val = e.target.value;
            setTitle(val);
          }}
        ></input>
      </div>
      <br></br>
      <input
        className=" w-60 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-teal-500"
        type="text"
        placeholder="Add more details..."
        onChange={(e) => {
          const val = e.target.value;
          setDescription(val);
        }}
      ></input>
      <br></br>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-700"
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const data = await fetch("http://localhost:3000/todos");
            const updatedData = await data.json();
            // console.log(updatedData);
            setTodos(updatedData);
            // alert("todo added");
          });
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default CreateTodo;
