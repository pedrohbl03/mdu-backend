const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const annotationSchema = mongoose.Schema(
  {
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
    referDate: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
);

// add plugin that converts mongoose to json
annotationSchema.plugin(toJSON);

/**
 * @typedef Annotation
 */
const Annotation = mongoose.model('Annotation', annotationSchema);

module.exports = Annotation;
