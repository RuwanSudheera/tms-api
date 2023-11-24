const Class = require('../models/Class');

const getAllClasses = async () => {
  try {
    const classes = await Class.findAll();
    return classes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClassById = async (id) => {
  try {
    const classInfo = await Class.findByPk(id);
    if (!classInfo) {
      throw new Error('Class not found');
    }
    return classInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createClass = async (classData) => {
  try {
    const newClass = await Class.create(classData);
    return newClass;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateClass = async (id, classData) => {
  try {
    const existingClass = await Class.findByPk(id);
    if (!existingClass) {
      throw new Error('Class not found');
    }

    await existingClass.update(classData);
    return existingClass;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteClass = async (id) => {
  try {
    const classInfo = await Class.findByPk(id);
    if (!classInfo) {
      throw new Error('Class not found');
    }

    await classInfo.destroy();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};
