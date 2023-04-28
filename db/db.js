require('dotenv').config()
const mongoose = require("mongoose")

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
module.exports = connectDB