const Joi = require('joi');
const { objectId } = require('./custom.validation')

const createAnnotation = {
  body: Joi.object().keys({
    user: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
  }),
};

const removeAnnotation = {
  body: Joi.object().keys({
    annotationId: Joi.string().required(),
  }),
};

const updateAnnotation = {
  params: Joi.object().keys({
    annotationId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
  })
    .min(1),
};

module.exports = {
  createAnnotation,
  removeAnnotation,
  updateAnnotation,
};
