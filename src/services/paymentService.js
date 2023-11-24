const Payment = require('../models/Payment');

const getAllPayments = async () => {
  try {
    const payments = await Payment.findAll();
    return payments;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPaymentById = async (id) => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new Error('Payment not found');
    }
    return payment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createPayment = async (paymentData) => {
  try {
    const payment = await Payment.create(paymentData);
    return payment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updatePayment = async (id, paymentData) => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new Error('Payment not found');
    }
    await payment.update(paymentData);
    return payment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePayment = async (id) => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new Error('Payment not found');
    }
    await payment.destroy();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment
};
