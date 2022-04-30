const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { annotationService } = require('../services');

const createAnnotation = catchAsync(async (req, res) => {
  const annotation = await annotationService.createAnnotation(req.body);
  res.status(httpStatus.CREATED).send({ annotation });
});

const updateAnnotation = catchAsync(async (req, res) => {
  const { id, ...rest } = req.body;
  const annotationId = await authService.getAnnotationById(id);
  const updateAnnotation = await annotationService.updateAnnotation(annotationId, rest);
  res.send({ updateAnnotation });
});

const deleteAnnotation = catchAsync(async (req, res) => {
  const { id } = req.body;
  await authService.deleteAnnotationById(id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAnnotation,
  updateAnnotation,
  deleteAnnotationById,
};
