const express =require("express")

const router=express.Router();
const { getAllTour ,createTour,updataTour,deleteTour,getSingleTour}=require("../controller/tourController")

router.get("/all-tour",getAllTour)
router.post("/create-tour",createTour)
router.patch("update-tour/:id",updataTour)
router.delete("/delete-tour/:id",deleteTour)
router.get("/:id",getSingleTour)

module.exports=router