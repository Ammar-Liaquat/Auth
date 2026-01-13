const User = require("../models/userModels")


const createuser = async(req,res)=>{

  try {
      const user = await User.create(req.body)
    res.status(201).json({
        message:"user create succesfully",
        code:201,
        data:user
    })
  } catch (error) {
      res.status(500).json({
        message:"user not create",
        code:500,
        error:error.message
  })
}
}
const getuser = async(req,res)=>{

  try {
      const user = await User.find()
    res.status(200).json({
        message:"user fetched succesfully",
        code:200,
        data:user
    })
  } catch (error) {
      res.status(500).json({
        message:"user not fetch",
        code:500,
        error:error.message
  })
}
}
const loginuser = async(req,res)=>{

  try {
      const {email,password}= req.body
      const user = await User.findOne({email})
      if(!user) return res.status(401).json({
        message:"email not exist",
        code:401
      }) 
    if(user.password !== password) return res.status(400).json({
      message:"password incorrect",
      code:400
    }) 
      res.status(200).json({
        message:"Login succesfully",
        code:200,
        data:user
    })
  } catch (error) {
        res.status(500).json({
        message:"internal server error",
        code:500,
        error:error.message
  })
}
}
const edituser = async(req,res)=>{

  try {
      const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).json({
        message:"user edit succesfully",
        code:200,
        data:user
    })
  } catch (error) {
      res.status(500).json({
        message:"internal server",
        code:500,
        error:error.message
  })
}
}


module.exports = {
    createuser,
    getuser,
    loginuser,
    edituser
}