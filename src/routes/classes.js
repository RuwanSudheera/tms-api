const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

// Define teachers routes here
router.post('/', classesController.createTeacher);
router.get('/', classesController.getAllTeachers);
router.get('/:id', classesController.getTeacherById);
router.put('/:id', classesController.updateTeacher);
router.delete('/:id', classesController.deleteTeacher);

module.exports = router;
