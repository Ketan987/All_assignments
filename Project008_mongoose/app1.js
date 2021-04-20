"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var port = 3000;
var app = express_1.default();
var mongoose = require('mongoose');
var Book = require('./book');
var dbURI = "mongodb://localhost/first";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (_result) { return console.log('Connected Successfully to DataBase'); })
    .catch(function (err) { return console.log(err); });
app.use(body_parser_1.default.json());
app.get("/books", function (_req, res) {
    Book.find()
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.get("/books/:id", function (req, res) {
    var id = req.params.id;
    Book.findById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (error) { return console.log(error); });
});
app.delete("/books/:id", function (req, res) {
    var id = req.params.id;
    Book.deleteOne({ _id: id })
        .then(function () {
        res.status(200).json({
            message: 'Books deleted'
        });
    })
        .catch(function (error) { return console.log(error); });
});
app.post('/books', function (req, res) {
    var book = new Book(req.body);
    book.save();
    res.send(book);
});
app.put('/books/:id', function (req, res) {
    var book = new Book({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating: req.body.rating,
    });
    Book.update({ _id: req.params.id }, book)
        .then(function () {
        res.status(201).json({
            message: 'Book updated successfully'
        });
    }).catch(function (error) { return console.log(error); });
});
app.listen(port, function () {
    console.log("Server Started at port " + port);
});
