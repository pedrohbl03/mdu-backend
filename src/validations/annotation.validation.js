const Joi = require('joi');

const createAnnotation = {
  body: Joi.object().keys({
    annotationId: Joi.string().required().email(),
    title: Joi.string().required().email(),
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
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    annotationId: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
  })
    .min(1),
};

module.exports = {
  createAnnotation,
  removeAnnotation,
  updateAnnotation,
};
