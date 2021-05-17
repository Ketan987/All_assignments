import bodyParser, { json } from "body-parser";
import express from "express";
import jsonwebtoken  from 'jsonwebtoken';
const jwt = jsonwebtoken;
var cors = require('cors');
const port =5000;
const app=express();
const mongoose= require('mongoose');
const refreshTokens =[];
// const Book= require('./book');
import {Book, User, Phones} from './book';
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
var temp_rand:number;

const dbURI=`mongodb://localhost/first`;
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((_result: any)=>console.log('Connected Successfully to DataBase'))
.catch((err: any)=>console.log(err));


function minute_diff(date1:Date, date2:Date) {
    var diff = (date2.getTime() - date1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff))
}


app.use(cors());

app.use(bodyParser.json()); 

app.post("/register", (req, res) => {
    const user = new User({
        username: req.body.username, 
        password : req.body.password
    });
    console.log(user);
    console.log(req.body);
    user.save();
    jwt.sign(user, 'pangong', {expiresIn : '1h'})
    res.send(user);
})


app.post("/login",(req:any, res:any) => {
    // console.log('going in');
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username, password)
    // const user = {username, password}
    User.findOne({username:username, password : password})
    .then((user:any) =>{
       const accessToken = jwt.sign({username : user.username}, 'pangnong', {expiresIn: '20m'});
       const refreshToken = jwt.sign({username : user.username}, 'pangnong');
       refreshTokens.push(refreshToken)
       console.log('user', user.username);
       res.json({accessToken, refreshToken, user})
   })
   .catch((err:Error) => {
       res.send('Error Occurend check username and password'+ err.name)
   })   

})

app.post('/logout', (req, res) => {
    const {token} = req.body;
    
    // refreshToken = refreshTokens.filter(token => t !== token)
    
})


// Author
app.get("/author/:value", (req, res) => {
    const value = req.params.value;
    let regex = new RegExp(value, 'i');
    Book.find({'author': regex})
    .then((result:any) => res.send(result))
    .catch((err:any) => res.send(err))
})

// title
app.get("/title/:value", (req, res) => {
    const value = req.params.value;
    let regex = new RegExp(value, 'i');
    Book.find({'title': regex})
    .then((result:any) => res.send(result))
    .catch((err:any) => res.send(err))
})

// Rating
app.get("/rating/:value", (req, res) => {
    const value = req.params.value;
    // let regex = new RegExp(value, 'i');
    Book.find({'rating': value})
    .then((result:any) => res.send(result))
    .catch((err:any) => res.send(err))
})

// price
app.get('/price/:min/:max', (req, res)=> {
    Book.find({
        $and:[
            {
                price: {$gte : req.params.min}
            },
            {
                price : {$lte : req.params.max}
            }
        ]
    })
    .then((result:any)=>{
        res.send(result);
    }).catch((err:any) => {
        res.send(err);
    })
})



app.get("/books",(_req,res)=>{
    // console.log('herer');
    Book.find()
    .then((result: any)=>{
        res.json(result.filter((ress:any) => ress.Mail === _req.body.Mail));
    })
    .catch((error: Error)=>console.log(error))
})


app.get("/books/id/:id",(req,res)=>{
    const id= req.params.id;
    console.log(id);
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


app.get('/books/price/:min/:max', (req, res) => {
    const min = req.params.min;
    const max = req.params.max;
    Book.find({$and:[{'price':{$gte:min}}, {'price': {$lte:max}}]})
    .then((result:any) => {
        console.log("here", result);
        res.send(result);
    })
    .catch((error:Error) => console.log(error))

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


function otpgen(){
    return(Math.floor(Math.random()*(99999-10000 +1))+10000);
}


app.post('/otpgenerate', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    Phones.find({cellNumber: phoneNumber})
    .then((result:any) =>{
        const otp = otpgen()
        client.messages
            .create({
                body: 'Hello, The otp for login is ' + otp,
                from: '+14133584421',
                to: phoneNumber
            })
            .then((message:any) => {
                // console.log(message.sid)
                Phones.findOneAndUpdate({cellNumber : phoneNumber}, {otp})
                .then((founder:any) => {
                    res.json({
                        message : 'Found',
                        action : 'generated otp sent on mobile ' + phoneNumber,
                        result : result
                    })
                })
                .catch((err:any) => console.log(err))
            })
            .catch((err:any)=> {
                console.log('Error Occured')
                res.json({
                    message : 'Not Found',
                    action : 'Error generating otp ' + phoneNumber,
                    result : err
                })
            });
    })
    .catch((err:any)=>{
        res.json({
            message : 'Not Found',
            result :  err
        })
    })
})


app.post('/otpverify', (req, res) =>{
    const number = req.body.cellNumber;
    const otp = req.body.otp;
    Phones.findOne({cellNumber : number})
    .then((out_data:any) => {
        // console.log(out_data.otp === +otp,typeof otp);
        if(out_data.otp === +otp){
            if(minute_diff(out_data.updatedAt, new Date()) <= 5){
                res.json({
                    messange : 'verified',
                    result : out_data
                })
            }
            else{
                res.json({
                    message : 'expired',
                    result : 'Its been more than 5 minutes alreadyt expired'
                })
            }
            
        }
        else{
            res.json({
                message : 'Not verified',
                result : out_data
            })
        }
    })
    .catch((err:any) => {
        res.json({
            message : 'Not Verified',
            result : 'Error Occured'
        })
    })
})


app.post('/registerNumber', (req, res) => {
    let phone=new Phones(req.body);
    phone.save();
    res.send(phone);
})


function authenticationTokens(req:any, res:any, next:any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, 'pangong', (err:any, user:any) => {
        if(err) return res.status(403).send('Something Went Wrong' + err.name)
        req.user = user
        next()
    })
}



app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
});