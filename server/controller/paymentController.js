const Razorpay = require("razorpay");
const crypto = require("crypto");
const paymentModel = require("../model/paymentModel");

const checkout = async (req, res) => {
  const instance = new Razorpay({
    key_id: "rzp_test_HO573khOZtla4h",
    key_secret: "7CeV7anRzcBct2lnpOjyI7wp",
  });
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  //  console.log(order)
  res.status(200).json({
    success: true,
    order,
  });
};

const paymentVarification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "7CeV7anRzcBct2lnpOjyI7wp")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === signature;

  if (isAuthentic) {
    await paymentModel.create({
      razorpay_order_id,
      razorpay_payment_id,
      signature,
    });

  } else {
    res.status(400).json({
      success: false,
    });
  }

  //     res.redirect(
  //         `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
  //       );
};

module.exports = {
  checkout,
  paymentVarification,
};
