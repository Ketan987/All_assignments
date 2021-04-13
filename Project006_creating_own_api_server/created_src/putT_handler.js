// const fs = require('fs');
import * as fs from 'fs';
var records;
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err)
        console.log("Erroe whilw loading data");
    else
        records = data;
});
const putBookListtHandler = (req, res) => {
    var data = JSON.parse(records)["books"];
    req.on('data', chunk => {
        data = JSON.parse(chunk.toString('utf8'));
    });
    req.on('end', () => {
        res.end(JSON.stringify(data));
        fs.writeFile('db.json', JSON.stringify(data), function (err) {
            if (err) {
                console.log("Error While Saving file");
            }
            ;
        });
    });
};
const putBookDetailHandler = (req, res) => {
    var _a;
    let parts = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('/');
    var data = JSON.parse(records)["books"];
    // console.log("in put idx handler");
    req.on('data', chunk => {
        var change = JSON.parse(chunk.toString());
        for (let i = 0; i < records.length; i++) {
            if (i === (+parts[parts.length - 1] - 1)) {
                data[i] = change;
            }
        }
    });
    req.on('end', () => {
        res.end(JSON.stringify(data));
        fs.writeFile('db.json', data, function (err) {
            if (err) {
                throw err;
            }
            else
                console.log("Update sucessful!");
        });
    });
};
const putNotFoundHandler = (req, res) => {
    res.end(`Not Found: ${req.url}`);
};
export const put_handler = (req, res) => {
    console.log(`Handling ${req.method} method`);
    if (req.url === '/books')
        return putBookListtHandler(req, res);
    else if (req.url && req.url.length > 1 && req.url.indexOf('/books') === 0)
        return putBookDetailHandler(req, res);
    else
        return putNotFoundHandler(req, res);
};
// module.exports.put_handler = put_handler;
