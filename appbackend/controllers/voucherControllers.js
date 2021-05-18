const mongoose = require("mongoose");

const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");

const redeemVoucher = async (req,res) => {
    try {
        // the name of the object in the body should be the same as what 
        // it is in the input's name field within the form
        const voucher = await Voucher.findOne({code:req.body.code}).lean()
        if (voucher){
            const voucher_point = voucher.point
            // the name of the object in the body should be the same as what 
            // it is in the input's name field within the form
            const user = await User.findOne({email:req.body.email}).lean()
            if (user){
                var user_point = user.point + voucher_point
                User.updateOne({email:req.body.email},{$set:{point:user_point}})
                return res.status(200).send({
                    message:"Success"
                }
                ) 
            }
            else{
                // ---awaiting changes--- 
                return res.status(404).send({
                    message:"User Not found"
                }
                ) 
            }

        }
        
        else{
            // ---awaiting change--- 
            return res.status(404).send({
                message:"Voucher Not found"
            }
            ) 
        }

    }catch(err) {
        res.status(400)
        return res.send("Database query failed")
    }
};

module.exports = {redeemVoucher}