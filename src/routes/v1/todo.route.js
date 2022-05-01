const express = require('express');
const validate = require('../../middlewares/validate');
const todoValidation = require('../../validations/todo.validation');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/:todoId')
  .post(validate(todoValidation.createTodo), todoController.createTodo)
  .patch(validate(todoValidation.removeTodo), todoController.deleteTodo)
  .delete(validate(todoValidation.updateTodo), todoController.updateTodo);


module.exports = router;
