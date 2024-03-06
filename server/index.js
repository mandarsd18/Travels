const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const userRouter=require("./routes/user")
const tourRouter=require("./routes/tourRoute")
const Razorpay =require("razorpay")
const paymentRoute=require("./routes/paymentRoutes")

require("dotenv").config()
const app = express()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{next()})


app.use("/auth/user" ,userRouter)
app.use("/tour",tourRouter)
app.use("/api",paymentRoute)

mongoose.connect('mongodb+srv://mandardeshmukh1811:mongodb@cluster0.xl1qqpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,()=>{
        console.log("server started")
    })
}).catch((err)=>{
    console.log(err)
})


