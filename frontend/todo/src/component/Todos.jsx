/* eslint-disable react/prop-types */
const Todos = (props) => {
  // eslint-disable-next-line react/prop-types
  const todos = props.todos;
  const setTodos = props.setTodos;

  return (
    <div className="grid grid-cols-3 justify-items-center">
      {todos.map(function (todo) {
        return (
          <div
            key={todo._id}
            className="flex flex-col w-72 my-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-violet-50"
          >
            <button
              className="text-end"
              onClick={() => {
                fetch("http://localhost:3000/removed", {
                  method: "DELETE",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async function () {
                  //const json = await res.json();
                  const updatedTodos = todos.filter((t) => t._id !== todo._id);
                  setTodos(updatedTodos);
                  //alert("Deleted");
                });
              }}
            >
              ❌
            </button>
            <div className="font-semibold text-xl">{todo?.title}</div>
            <h2 className="">{todo?.description}</h2>
            <button
              className="mt-5"
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async function () {
                  //const json = await res.json();
                  const updatedTodos = todos.map((t) =>
                    t._id === todo._id ? { ...t, completed: true } : t
                  );
                  setTodos(updatedTodos);
                  //alert("marked as completed");
                });
              }}
            >
              {todo?.completed == true ? "Done 🚀" : "Pending ⏰"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
