// import { ServerResponse } from "node:http";


const express = require('express');
const router = express.Router();

// const User = require('./users.js');



router.get('/', (req:any, res:any) => {
    res.send('register')
})

module.exports= router;