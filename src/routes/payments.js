const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getAllPaymentsController);
router.get('/:id', paymentController.getPaymentByIdController);
router.post('/', paymentController.createPaymentController);
router.put('/:id', paymentController.updatePaymentController);
router.delete('/:id', paymentController.deletePaymentController);

module.exports = router;
