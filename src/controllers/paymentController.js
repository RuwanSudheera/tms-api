const paymentService = require('../services/paymentService');

const getAllPaymentsController = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json({ payments });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPaymentByIdController = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const payment = await paymentService.getPaymentById(id);
    if (!payment) {
      throw new Error('Payment not found');
    }
    res.json({ payment });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const createPaymentController = async (req, res) => {
  const paymentData = req.body;
  try {
    const payment = await paymentService.createPayment(paymentData);
    res.status(201).json({ payment });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePaymentController = async (req, res) => {
  const id = parseInt(req.params.id);
  const paymentData = req.body;
  try {
    const payment = await paymentService.updatePayment(id, paymentData);
    if (!payment) {
      throw new Error('Payment not found');
    }
    res.json({ payment });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePaymentController = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await paymentService.deletePayment(id);
    res.status(204).send('Payment deleted');
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getAllPaymentsController,
  getPaymentByIdController,
  createPaymentController,
  updatePaymentController,
  deletePaymentController
};
