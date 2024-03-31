const paymentService = require('../services/paymentService');

const getAllPaymentsController = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json({ success: true, data: payments });
  } catch (error) {
    res.status(500).send({success: false, error: error.message});
  }
};

const getPaymentByIdController = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const payment = await paymentService.getPaymentById(id);
    if (!payment) {
      throw new Error('Payment not found');
    }
    res.json({ success: true, data: payment });
  } catch (error) {
    res.status(404).send({success: false, error: error.message});
  }
};

const createPaymentController = async (req, res) => {
  const paymentData = req.body;
  try {
    const payment = await paymentService.createPayment(paymentData);
    res.status(201).json({ success: true, data: payment });
  } catch (error) {
    res.status(400).send({success: false, error: error.message});
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
    res.json({ success: true, data: payment });
  } catch (error) {
    res.status(400).send({success: false, error: error.message});
  }
};

const deletePaymentController = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await paymentService.deletePayment(id);
    res.status(204).send('Payment deleted');
  } catch (error) {
    res.status(404).send({success: false, error: error.message});
  }
};

module.exports = {
  getAllPaymentsController,
  getPaymentByIdController,
  createPaymentController,
  updatePaymentController,
  deletePaymentController
};
