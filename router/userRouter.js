const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require("mongoose")
const { saveUser, findUser } = require('../db/db')
const router = express.Router()
const User=require('../models/userModel')
const userModel = require('../models/userModel')

router.post('/register', (req,res,next)=>{
    //find user
    console.log("check --->",req.body.email)
    findUser({email: req.body.email})
    .then((user)=>{
        console.log("user--->",user)
        if (user) {
            return res.status(409).json({message: 'User exist, try logging again!'})
        }else{
            const user = new userModel()
            // user._id=mongoose.Schema.Types.ObjectId
            console.log("user===>",user)
            console.log("req.body===>",req.body)
            const newUser = Object.assign(user,req.body)
            // encrypt the pass
            bcrypt.hash(newUser.password,10,function(err,hash){
                if (err) {
                    return res.status(501).json({message:'Error: '+ err.message })
                }else{
                    console.log("vo day")
                   newUser.password=hash
                   saveUser(newUser)
                   .then((user)=>{
                    console.log("first")
                    console.log(user)
                    return res.status(201).json({
                        message: 'Successful registration',
                        user:user
                    })
                   }).catch((err)=>{
                    error:{
                        message: err.message
                    }
                   })
                }
            })
        }
    })
    //if exist return response -> login
    //else
    //encrypt the password
})

router.post("/login", (req,res)=>{
    
})

module.exports=router