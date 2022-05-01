const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { todoService } = require('../services');

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send({ todo });
});

const updateTodo = catchAsync(async (req, res) => {
  const { id, ...rest } = req.body;
  const todoId = await todoService.getTodoById(id);
  const updateTodo = await todoService.updateTodo(todoId, rest);
  res.send({ updateTodo });
});

const deleteTodo = catchAsync(async (req, res) => {
  const { todoId } = req.body;
  await todoService.deleteTodoById(todoId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
};
