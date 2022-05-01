const httpStatus = require('http-status');
const { Todo } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a todo
 * @param {Object} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
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
  const todo = await getAnnotationById(todoId);
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
  const todo = await getUserById(todoId);
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
  deleteAnnotationById,
};
