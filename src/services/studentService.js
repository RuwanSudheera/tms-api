const Student = require('../models/Student');

// Create a new student
exports.createStudent = async (studentData) => {
  try {
    const student = await Student.create(studentData);
    return student;
  } catch (error) {
    throw error;
  }
};

// Get all students
exports.getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    throw error;
  }
};

// Get a student by ID
exports.getStudentById = async (id) => {
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  } catch (error) {
    throw error;
  }
};

// Update a student by ID
exports.updateStudent = async (id, studentData) => {
  try {
    const [updatedRowCount] = await Student.update(studentData, {
      where: { id },
    });
    if (updatedRowCount === 0) {
      throw new Error('Student not found');
    }
    const updatedStudent = await Student.findByPk(id);
    return updatedStudent;
  } catch (error) {
    throw error;
  }
};

// Delete a student by ID
exports.deleteStudent = async (id) => {
  try {
    const deletedRowCount = await Student.destroy({
      where: { id },
    });
    if (deletedRowCount === 0) {
      throw new Error('Student not found');
    }
  } catch (error) {
    throw error;
  }
};
