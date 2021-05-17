"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var jwt = jsonwebtoken_1.default;
var cors = require('cors');
var port = 5000;
var app = express_1.default();
var mongoose = require('mongoose');
var refreshTokens = [];
// const Book= require('./book');
var book_1 = require("./book");
require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);
var temp_rand;
var dbURI = "mongodb://localhost/first";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (_result) { return console.log('Connected Successfully to DataBase'); })
    .catch(function (err) { return console.log(err); });
function minute_diff(date1, date2) {
    var diff = (date2.getTime() - date1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}
app.use(cors());
app.use(body_parser_1.default.json());
app.post("/register", function (req, res) {
    var user = new book_1.User({
        username: req.body.username,
        password: req.body.password
    });
    console.log(user);
    console.log(req.body);
    user.save();
    jwt.sign(user, 'pangong', { expiresIn: '1h' });
    res.send(user);
});
app.post("/login", function (req, res) {
    // console.log('going in');
    var username = req.body.username;
    var password = req.body.password;
    // console.log(username, password)
    // const user = {username, password}
    book_1.User.findOne({ username: username, password: password })
        .then(function (user) {
        var accessToken = jwt.sign({ username: user.username }, 'pangnong', { expiresIn: '20m' });
        var refreshToken = jwt.sign({ username: user.username }, 'pangnong');
        refreshTokens.push(refreshToken);
        console.log('user', user.username);
        res.json({ accessToken: accessToken, refreshToken: refreshToken, user: user });
    })
        .catch(function (err) {
        res.send('Error Occurend check username and password' + err.name);
    });
});
app.post('/logout', function (req, res) {
    var token = req.body.token;
    // refreshToken = refreshTokens.filter(token => t !== token)
});
// Author
app.get("/author/:value", function (req, res) {
    var value = req.params.value;
    var regex = new RegExp(value, 'i');
    book_1.Book.find({ 'author': regex })
        .then(function (result) { return res.send(result); })
        .catch(function (err) { return res.send(err); });
});
// title
app.get("/title/:value", function (req, res) {
    var value = req.params.value;
    var regex = new RegExp(value, 'i');
    book_1.Book.find({ 'title': regex })
        .then(function (result) { return res.send(result); })
        .catch(function (err) { return res.send(err); });
});
// Rating
app.get("/rating/:value", function (req, res) {
    var value = req.params.value;
    // let regex = new RegExp(value, 'i');
    book_1.Book.find({ 'rating': value })
        .then(function (result) { return res.send(result); })
        .catch(function (err) { return res.send(err); });
});
// price
app.get('/price/:min/:max', function (req, res) {
    book_1.Book.find({
        $and: [
            {
                price: { $gte: req.params.min }
            },
            {
                price: { $lte: req.params.max }
            }
        ]
    })
        .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.send(err);
    });
});
app.get("/books", function (_req, res) {
    // console.log('herer');
    book_1.Book.find()
        .then(function (result) {
        res.json(result.filter(function (ress) { return ress.Mail === _req.body.Mail; }));
    })
        .catch(function (error) { return console.log(error); });
});
app.get("/books/id/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    book_1.Book.findById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.delete("/books/:id", function (req, res) {
    var id = req.params.id;
    book_1.Book.deleteOne({ _id: id })
        .then(function () {
        res.status(200).json({
            message: 'Books deleted'
        });
    })
        .catch(function (error) { return console.log(error); });
});
app.get('/books/price/:min/:max', function (req, res) {
    var min = req.params.min;
    var max = req.params.max;
    book_1.Book.find({ $and: [{ 'price': { $gte: min } }, { 'price': { $lte: max } }] })
        .then(function (result) {
        console.log("here", result);
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.post('/books', function (req, res) {
    var book = new book_1.Book(req.body);
    book.save();
    res.send(book);
});
app.put('/books/:id', function (req, res) {
    var book = new book_1.Book({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating: req.body.rating,
    });
    book_1.Book.update({ _id: req.params.id }, book)
        .then(function () {
        res.status(201).json({
            message: 'Book updated successfully'
        });
    }).catch(function (error) { return console.log(error); });
});
function otpgen() {
    return (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
}
app.post('/otpgenerate', function (req, res) {
    var phoneNumber = req.body.phoneNumber;
    book_1.Phones.find({ cellNumber: phoneNumber })
        .then(function (result) {
        var otp = otpgen();
        client.messages
            .create({
            body: 'Hello, The otp for login is ' + otp,
            from: '+14133584421',
            to: phoneNumber
        })
            .then(function (message) {
            // console.log(message.sid)
            book_1.Phones.findOneAndUpdate({ cellNumber: phoneNumber }, { otp: otp })
                .then(function (founder) {
                res.json({
                    message: 'Found',
                    action: 'generated otp sent on mobile ' + phoneNumber,
                    result: result
                });
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) {
            console.log('Error Occured');
            res.json({
                message: 'Not Found',
                action: 'Error generating otp ' + phoneNumber,
                result: err
            });
        });
    })
        .catch(function (err) {
        res.json({
            message: 'Not Found',
            result: err
        });
    });
});
app.post('/otpverify', function (req, res) {
    var number = req.body.cellNumber;
    var otp = req.body.otp;
    book_1.Phones.findOne({ cellNumber: number })
        .then(function (out_data) {
        // console.log(out_data.otp === +otp,typeof otp);
        if (out_data.otp === +otp) {
            if (minute_diff(out_data.updatedAt, new Date()) <= 5) {
                res.json({
                    messange: 'verified',
                    result: out_data
                });
            }
            else {
                res.json({
                    message: 'expired',
                    result: 'Its been more than 10 minutes alreadyt expired'
                });
            }
        }
        else {
            res.json({
                message: 'Not verified',
                result: out_data
            });
        }
    })
        .catch(function (err) {
        res.json({
            message: 'Not Verified',
            result: 'Error Occured'
        });
    });
});
app.post('/registerNumber', function (req, res) {
    var phone = new book_1.Phones(req.body);
    phone.save();
    res.send(phone);
});
function authenticationTokens(req, res, next) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(" ")[1];
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, 'pangong', function (err, user) {
        if (err)
            return res.status(403).send('Something Went Wrong' + err.name);
        req.user = user;
        next();
    });
}
app.listen(port, function () {
    console.log("Server Started at port " + port);
});
