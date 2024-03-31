const teacherService = require('../services/teacherService');

// Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const teacherData = req.body;
    const teacher = await teacherService.createTeacher(teacherData);
    res.status(201).json({success: true, data: teacher});
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.status(200).json({success: true, data: teachers});
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const id = req.params.id;
    const teacher = await teacherService.getTeacherById(id);
    res.status(200).json({success: true, data: teacher});
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

// Update a teacher by ID
exports.updateTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const teacherData = req.body;
    const updatedTeacher = await teacherService.updateTeacher(id, teacherData);
    res.status(200).json({success: true, data: updatedTeacher});
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    await teacherService.deleteTeacher(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};
