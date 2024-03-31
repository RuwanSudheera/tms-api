const studentService = require('../services/studentService');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const student = await studentService.createStudent(studentData);
    res.status(201).json({success: true, data: student});
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json({success: true, data: students});
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentService.getStudentById(id);
    res.status(200).json({success: true, data: student});
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

// Update a student by ID
exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studentData = req.body;
    const updatedStudent = await studentService.updateStudent(id, studentData);
    res.status(200).json({success: true, data: updatedStudent});
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

// Delete a student by ID
exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await studentService.deleteStudent(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};
