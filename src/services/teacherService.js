const Teacher = require('../models/Teacher');

// Create a new teacher
exports.createTeacher = async (teacherData) => {
  try {
    const teacher = await Teacher.create(teacherData);
    return teacher;
  } catch (error) {
    throw error;
  }
};

// Get all teachers
exports.getAllTeachers = async () => {
  try {
    const teachers = await Teacher.findAll();
    return teachers;
  } catch (error) {
    throw error;
  }
};

// Get a teacher by ID
exports.getTeacherById = async (id) => {
  try {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    return teacher;
  } catch (error) {
    throw error;
  }
};

// Update a teacher by ID
exports.updateTeacher = async (id, teacherData) => {
  try {
    const [updatedRowCount] = await Teacher.update(teacherData, {
      where: { id },
    });
    if (updatedRowCount === 0) {
      throw new Error('Teacher not found');
    }
    const updatedTeacher = await Teacher.findByPk(id);
    return updatedTeacher;
  } catch (error) {
    throw error;
  }
};

// Delete a teacher by ID
exports.deleteTeacher = async (id) => {
  try {
    const deletedRowCount = await Teacher.destroy({
      where: { id },
    });
    if (deletedRowCount === 0) {
      throw new Error('Teacher not found');
    }
  } catch (error) {
    throw error;
  }
};
