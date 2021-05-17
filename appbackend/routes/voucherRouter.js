const express = require('express')
const voucherRouter = express.Router()
const voucherController = require('../controllers/voucherControllers.js')

voucherRouter.post('/voucherrd/redeem', voucherController.redeemVoucher)

module.exports = voucherRouter