const express = require('express')
const cors=require('cors')
const userRouter = require('../router/userRouter')

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//add router
app.use('/user',userRouter)


app.get('/',(req,res,next)=>{
    res.status(200).json({message:"Call thanh cong!"})
})
app.use((req,res,next)=>{
    const error = new Error('Not Found!')
    error.status = 404
    error.name="Oi Zoi Oi!"
    error.message="Cuoc Doi",
    error.stack="kafkskf"
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message:error.message,
            status: error.status,
            name: error.name,
            stack:error.stack
        }
    })
})

module.exports=app
