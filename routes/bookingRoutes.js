const express = require('express');
const bookingCntroller = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();
router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingCntroller.getCheckoutSession
);
module.exports = router;
