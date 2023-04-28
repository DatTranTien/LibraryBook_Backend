const express = require('express')
const { saveUser } = require('../db/db')
const router = express.Router()

router.post('/register', (req,res,next)=>{
    //find user
    //if exist return response -> login
    //else
    //encrypt the password
})

router.post("/login", (req,res)=>{
    
})

module.exports=router