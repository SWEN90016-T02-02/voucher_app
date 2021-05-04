const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
    voucher_id : {type: Number, min : 0, required: true},
    code: {type: String,  required: true},     
})

const Voucher = mongoose.model('Voucher', voucherSchema)
module.exports= Voucher