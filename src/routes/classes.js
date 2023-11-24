const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

// Define teachers routes here
router.post('/', classesController.createClass);
router.get('/', classesController.getAllClasses);
router.get('/:id', classesController.getClassById);
router.put('/:id', classesController.updateClass);
router.delete('/:id', classesController.deleteClass);

module.exports = router;
