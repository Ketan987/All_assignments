"use strict";
// import { ServerResponse } from "node:http";
var express = require('express');
var router = express.Router();
// const User = require('./users.js');
router.get('/', function (req, res) {
    res.send('register');
});
module.exports = router;
