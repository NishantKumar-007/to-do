//basic express boilerplate code
const cors = require("cors");
const express = require("express");
const { createTodos, updateTodos, deleteTodos } = require("./types");
const { todos } = require("./db");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  const todoList = await todos.find();
  res.json(todoList);
});

// title , description - string
app.post("/todos", async (req, res) => {
  const originalData = req.body;

  const parsedData = createTodos.safeParse(originalData);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "Wrong inputs sent",
    });
  }

  await todos.create({
    title: originalData.title,
    description: originalData.description,
    completed: false,
  });
  res.json({
    msg: "todo is added",
  });
});

app.put("/completed", async (req, res) => {
  const originalData = req.body;
  const parsedData = updateTodos.safeParse(originalData);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "Wrong inputs sent",
    });
  }
  await todos.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Task is marked complete",
  });
});

app.delete("/removed", async (req, res) => {
  const originalData = req.body;
  const parsedData = deleteTodos.safeParse(originalData);
  if (!parsedData.success) {
    res.status(411).json({
      msg: "Wrong inputs sent",
    });
  }

  await todos.findOneAndDelete({ _id: req.body.id });
  res.json({
    msg: "Successfully deleted",
  });
});

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
