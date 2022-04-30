const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const todoSchema = mongoose.Schema(
  {
    todoId: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
todoSchema.plugin(toJSON);

/**
 * @typedef Todo
 */
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
