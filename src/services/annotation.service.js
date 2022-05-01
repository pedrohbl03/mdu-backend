const httpStatus = require('http-status');
const { Annotation } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a annotation
 * @param {Object} annotationBody
 * @returns {Promise<Annotation>}
 */
const createAnnotation = async (annotationBody) => {
  return Annotation.create(annotationBody);
};

/**
 * Get annotation by id
 * @param {ObjectId} id
 * @returns {Promise<Annotation>}
 */
const getAnnotationById = async (id) => {
  return Annotation.findById(id);
};

/**
 * Update annotation by id
 * @param {ObjectId} annotationId
 * @param {Object} updateBody
 * @returns {Promise<Annotation>}
 */
const updateAnnotation = async (annotationId, updateBody) => {
  const annotation = await getAnnotationById(annotationId);
  if (!annotation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Annotation not found');
  }

  Object.assign(annotation, updateBody);
  await annotation.save();
  return annotation;
};

/**
 * Delete annotation by id
 * @param {ObjectId} annotationId
 * @returns {Promise<Annotation>}
 */
const deleteAnnotationById = async (annotationId) => {
  const annotation = await getAnnotationById(annotationId);
  if (!annotation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Annotation not found');
  }
  await annotation.remove();
  return annotation;
};

module.exports = {
  createAnnotation,
  getAnnotationById,
  updateAnnotation,
  deleteAnnotationById,
};
