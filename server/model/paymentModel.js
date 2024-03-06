const mongoose=require("mongoose")


const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
  });

  module.exports=new mongoose.model("payment",paymentSchema)

  