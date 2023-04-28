const express = require('express')
const userRouter = express.Router()

userRouter.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Successful Call!",
        metadata:{
            hostname:req.hostname,
            method:req.method
        }
    })
})

userRouter.get('/:id',(req,res,next)=>{
    res.status(200).json({
        message:`Succcessful GET ${req.params.id}`,
        metadata:{
            hostname:req.hostname,
            id:req.params.id,
            method:req.method
        }
    })
})

userRouter.post('/',(req,res,next)=>{
    const name = req.body.name
    res.status(200).json({
        message:"Sucessful - POST",
        metadata:{
            name:name,
            hostname:req.hostname,
            method:req.method
        }
    })
})

userRouter.put("/:id",(req,res,next)=>{
    res.status(200).json({
        message:"Successful PUT",
        metadata:{
            hostname:req.hostname,
            method:req.method
        }
    })
})

userRouter.delete("/:id",(req,res,next)=>{
    res.status(200).json({
        message:"Successful DELETE",
        metadata:{
            hostname:req.hostname,
            method:req.method
        }
    })
})

module.exports = userRouter