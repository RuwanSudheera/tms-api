const classService = require('../services/classService');

const getAllClasses = async (req, res) => {
  try {
    const classes = await classService.getAllClasses();
    res.json({ classes });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getClassById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const classInfo = await classService.getClassById(id);
    res.json({ classInfo });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const createClass = async (req, res) => {
  const classData = req.body;
  try {
    const newClass = await classService.createClass(classData);
    res.status(201).json({ newClass });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateClass = async (req, res) => {
  const id = parseInt(req.params.id);
  const classData = req.body;
  try {
    const updatedClass = await classService.updateClass(id, classData);
    res.json({ updatedClass });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteClass = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await classService.deleteClass(id);
    res.status(204).send('Class deleted');
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};
