const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Student = require('./Student'); 
const Class = require('./Class');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    }
  },
class_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2)
  },
  payment_date: {
    type: DataTypes.DATE
  },
  payment_method: {
    type: DataTypes.STRING
  },
  payment_status: {
    type: DataTypes.STRING
  }
}, {
    tableName: 'tms_payment',
  });

module.exports = Payment;
