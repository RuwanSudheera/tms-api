const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Teacher = require('./Teacher'); // Import the Teacher model

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateAndTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Define the teacher ID as a foreign key referencing the Teacher model
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: 'id',
    },
  },
  // Add other relevant fields here
}, {
    tableName: 'tms_class',
  });

module.exports = Class;
