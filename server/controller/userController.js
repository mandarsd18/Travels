const mongoose = require("mongoose");
const UserModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password) {
    return res.status(401).json({
      error: "All Field are neccesary",
    });
  }
  const user = await UserModel.findOne({ username: username });
  if (user) {
    return res.status(401).json({
      error: "This user is already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    return res.json({
      message: "User Registed successfully !!",
      newUser,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
const loginUser = async (req, res) => {
    const {email ,password,role}=req.body;
    const user=await UserModel.findOne({email:email})
    if(!user){
        return res.status(203).json({
            error:"Invalid Email id !!"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.json({
            error:"Invalid password"
        })
    }
    const token =jwt.sign({id:user._id},"secret");
    res.json({
        token,
        userId : user._id,
        role:user.role
    })

};

module.exports = {
  registerUser,
  loginUser,
};
