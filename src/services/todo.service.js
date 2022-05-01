const httpStatus = require('http-status');
const { Todo, User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a todo
 * @param {Object} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
  const { user: userId } = todoBody;
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  }

  return Todo.create(todoBody);
};

/**
 * Get todo by id
 * @param {ObjectId} id
 * @returns {Promise<Todo>}
 */
const getTodoById = async (id) => {
  return Todo.findById(id);
};

/**
 * Update todo by id
 * @param {ObjectId} todoId
 * @param {Object} updateBody
 * @returns {Promise<Todo>}
 */
const updateTodo = async (todoId, updateBody) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }

  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

/**
 * Delete todo by id
 * @param {ObjectId} todoId
 * @returns {Promise<Todo>}
 */
const deleteTodoById = async (todoId) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  await todo.remove();
  return todo;
};

module.exports = {
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodoById,
};
