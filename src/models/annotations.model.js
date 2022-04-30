const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const annotationSchema = mongoose.Schema(
  {
    annotationId: {
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
annotationSchema.plugin(toJSON);

/**
 * @typedef Annotation
 */
const Annotation = mongoose.model('Annotation', annotationSchema);

module.exports = Annotation;