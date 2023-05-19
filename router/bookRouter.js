const express = require('express')
const { getAllBooks, getBookById, updateBookService, deleteBookService } = require('../services/bookService')
const bookRouter = express.Router()

// (req,res,next)=>{
//     res.status(200).json({
//         message:"Successful Call!",
//         metadata:{
//             hostname:req.hostname,
//             method:req.method
//         }
//     })
// }
bookRouter.get('/',getAllBooks)


bookRouter.get('/:id',(req,res,next)=>{
    res.status(200).json({
        message:`Succcessful GET ${req.params.id}`,
        metadata:{
            hostname:req.hostname,
            id:req.params.id,
            method:req.method
        }
    })
})
// (req,res,next)=>{
//     res.status(200).json({
//         message:`Succcessful GET by ID`,
//         metadata:{
//             hostname:req.hostname,
//             id:req.params.id,
//             method:req.method
//         }
//     })
// }
bookRouter.get('/:bookId',getBookById)

bookRouter.post('/',(req,res,next)=>{
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
// (req,res,next)=>{
//     res.status(200).json({
//         message:"Successful PUT",
//         metadata:{
//             hostname:req.hostname,
//             method:req.method
//         }
//     })
// }
bookRouter.put("/:bookId",updateBookService)
// (req,res,next)=>{
//     res.status(200).json({
//         message:"Successful DELETE",
//         metadata:{
//             hostname:req.hostname,
//             method:req.method
//         }
//     })
// }
bookRouter.delete("/:bookId",deleteBookService)

module.exports = bookRouter