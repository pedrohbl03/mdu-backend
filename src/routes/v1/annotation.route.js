const express = require('express');
const validate = require('../../middlewares/validate');
const annotationValidation = require('../../validations/annotation.validation');
const annotationController = require('../../controllers/annotation.controller');

const router = express.Router();

router
  .route('/:annotationId')
  .post(validate(annotationValidation.createAnnotation), annotationController.createAnnotation)
  .patch(validate(annotationValidation.removeAnnotation), annotationController.deleteAnnotation)
  .delete(validate(annotationValidation.updateAnnotation), annotationController.updateAnnotation);


module.exports = router;
