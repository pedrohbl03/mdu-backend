const Joi = require('joi');
const { objectId } = require('./custom.validation')

const createTodo = {
  body: Joi.object().keys({
    user: Joi.required().custom(objectId),
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

const removeTodo = {
  body: Joi.object().keys({
    todoId: Joi.string().required(),
  }),
};

const updateTodo = {
  params: Joi.object().keys({
    todoId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
  })
    .min(1),
};

module.exports = {
  createTodo,
  removeTodo,
  updateTodo,
};
