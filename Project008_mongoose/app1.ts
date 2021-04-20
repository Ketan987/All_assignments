import bodyParser from "body-parser";
import express from "express";
import { error } from "node:console";
import { ppid, title } from "node:process";
const port =3000;
const app=express();
const mongoose= require('mongoose');
const Book= require('./book');


const dbURI=`mongodb://localhost/first`;
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((_result: any)=>console.log('Connected Successfully to DataBase'))
.catch((err: any)=>console.log(err));

app.use(bodyParser.json()); 

app.get("/books",(_req,res)=>{
    Book.find()
    .then((result: any)=>{
        res.send(result);
    })
    .catch((error: Error)=>console.log(error))
})

app.get("/books/:id",(req,res)=>{
    const id= req.params.id;
    Book.findById(id)
    .then((result: any)=>{
        res.send(result);
    })
    .catch((error: Error)=>console.log(error))
})


app.delete("/books/:id",(req,res)=>{
   const id= req.params.id;
    Book.deleteOne({_id:id})
    .then(()=>{
    res.status(200).json({
        message:'Books deleted'
    })
    })
    .catch((error:Error)=>console.log(error))
})

app.post('/books',(req,res)=>{
    let book=new Book(req.body);
    book.save();
    res.send(book);
});

app.put('/books/:id',(req,res)=>{
    const book=new Book({
        _id:req.params.id,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        rating:req.body.rating,
    });
    Book.update({_id:req.params.id},book)
    .then(()=>{
        res.status(201).json({
            message:'Book updated successfully'
        })
    }).catch((error:Error)=>console.log(error))

})

app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
});