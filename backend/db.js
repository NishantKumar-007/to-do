const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://conengineer007:KvEn4Hj8PCSbM4tS@demo.ggplfkr.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
