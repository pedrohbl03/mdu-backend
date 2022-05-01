const express = require('express');
const validate = require('../../middlewares/validate');
const annotationValidation = require('../../validations/annotation.validation');
const annotationController = require('../../controllers/annotation.controller');

const router = express.Router();

router.post('/', validate(annotationValidation.createAnnotation), annotationController.createAnnotation);

router
  .route('/:annotationId')
  .patch(validate(annotationValidation.removeAnnotation), annotationController.deleteAnnotation)
  .delete(validate(annotationValidation.updateAnnotation), annotationController.updateAnnotation);

module.exports = router;
