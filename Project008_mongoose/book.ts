import { timeStamp } from "node:console";

const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const userSchema = new Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        requaired : true
    }
})


const bookSchema= new Schema({
    title:{
        type: String,
        // required : true
    },
    author:{
        type: String,
        // required : true
    },
    price:{
        type: Number,
        // required : true
    },
    rating:{
        type: Number, 
        // required : true
    },
    cover:{
        type :String,

    }
},{timestamps:true});//passing a constructor here



const phoneSchema = new Schema({
    cellNumber: {
        type : Number,
        required : true
    },
    otp :{
        type : Number,
    }
},{timestamps:true});

//craeting a mode based on tht  object
const Book= mongoose.model('books',bookSchema);
const User = mongoose.model('users', userSchema);
const Phones = mongoose.model('phones', phoneSchema);
//books is Collection
// module.exports=Book;
export {Book, User, Phones};