const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter your Name"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Passenger"
    }

},{timestamps:true})

module.exports=mongoose.model('user',UserSchema)
