const express =require("express")
const { checkout,paymentVarification}=require("../controller/paymentController")


const router=express.Router();

router.post("/checkout" ,checkout);
router.post("/paymentverification",paymentVarification);

module.exports=router;
