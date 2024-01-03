const mongoose = require("mongoose");

mongoose.connect("your_URL_here");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
