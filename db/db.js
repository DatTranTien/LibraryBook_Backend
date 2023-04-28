require('dotenv').config()
const mongoose = require("mongoose")
const userModel = require('../models/userModel')

// note remove async if want not give error
const connectDB =  () => {
    try {
         mongoose.connect(process.env.mongo,  
          console.log("Mongo is runing!"))
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

const disconnect = ()=>{
    mongoose.connection.close()
}

const findUser = async (obj)=>{
    userModel.findOne(obj)
}

const saveUser=(newUser)=>{
    return newUser.save()
}


module.exports = {connectDB,saveUser,findUser,disconnect}