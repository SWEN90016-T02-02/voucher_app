const mongoose = require("mongoose");

const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");

const redeemVoucher = async (req,res) => {
    try {
        // the name of the object in the body should be the same as what 
        // it is in the input's name field within the form
        const voucher = await Voucher.findOne({code:req.body.code}).lean()
        const user = await User.findOne({email:req.body.email}).lean()
        if (voucher){
            const voucher_point = voucher.point
            // the name of the object in the body should be the same as what 
            // it is in the input's name field within the form
            if (user){
                await User.updateOne({email:req.body.email},{$inc:{point: voucher_point}})
                const userupdated = await User.findOne({email:req.body.email}).lean()
                return res.status(200).send({
                    message: "" + voucher_point + " voucher points successfully added to the user! Now " 
                                + userupdated.point + " remaining.",
                    point: userupdated.point
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