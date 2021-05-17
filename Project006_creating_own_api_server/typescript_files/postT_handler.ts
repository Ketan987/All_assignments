// const fs = require('fs');
import * as fs from 'fs';
import { IncomingMessage, ServerResponse } from 'node:http';
var records:any;
fs.readFile('db.json', 'utf8', (err, data) => {
    if(err)
        console.log("Erroe while loading data");
    else
        records = data;
});

const postBookDetailHandler = (req:IncomingMessage, res:ServerResponse)=> {
    var data = JSON.parse(records)["books"];
    req.on('data', chunk => {
        data.push(JSON.parse(chunk.toString('utf8')));
    })
    req.on('end', () => {
        res.end(JSON.stringify(data));
        // console.log(typeof data);
        // fs.writeFile('db2.json', JSON.stringify(data), function(err) {
        //     if(err){console.log('Not Updating')}
        //     else
        //         console.log("Update sucessful!");
        // })
        fs.writeFile('db.json', JSON.stringify(data), function(err) {
            if(err) {console.log("Error While Saving file")};
        });
    })
}

const postNotFoundHandler = (req:IncomingMessage, res:ServerResponse) => {
    res.end(`NOT FOUND : ${req.url}`);
}

export const post_handler = (req:IncomingMessage, res:ServerResponse) => {
    console.log(`Handling ${req.method} method`);
    if (req.url === '/books'){
        return postBookDetailHandler(req, res)
    }
    else
        return postNotFoundHandler(req, res);
}

// module.exports.post_handler = post_handler;