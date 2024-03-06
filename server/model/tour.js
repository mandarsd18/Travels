const mongoose=require("mongoose")

const TourSchema=new mongoose.Schema({

    tourName:{
        type:String,
        required:[true,"Please add a name"]

    },
    tourImg:{
        type : String ,
        required:true
    },
    description:{
        type:String,
        required:[true,'please enter the Description']
    },
    price:{
        type:Number,
        required:[true ,'Enter Price']
    },
    address:{
        type:String,required:[true ,"enter Address"],
    },
    state:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=new mongoose.model("tour",TourSchema)