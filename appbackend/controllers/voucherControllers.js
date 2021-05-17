const mongoose = require("mongoose");

const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");

const redeemVoucher = async (req,res) => {
    try {
        // the name of the object in the body should be the same as what 
        // it is in the input's name field within the form
        const voucher = await Voucher.find({code:req.body.voucher_code}).lean()
        if (voucher){
            const voucher_point = voucher.point
            // the name of the object in the body should be the same as what 
            // it is in the input's name field within the form
            const user = await User.find({email_address:req.body.email}).lean()
            if (user){
                var user_point = user.point + voucher_point
                User.updateOne({email_address:req.body.email},{$set:{point:user_point}})
                res.redirect('/profile') // ---awaiting changes--- 
            }
            else{
                // ---awaiting changes--- 
                res.redirect('/profile')
            }
        }
        
        else{
            // ---awaiting change--- 
            res.redirect('/voucherrd')
        }

    }catch(err) {
        res.status(400)
        return res.send("Database query failed")
    }
};

module.exports = {redeemVoucher}