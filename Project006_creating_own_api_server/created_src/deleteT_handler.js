import * as fs from 'fs';
// const fs = require('fs');
var records;
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err)
        console.log("Erroe whilw loading data");
    else
        records = data;
});
const deleteBookDetailHandler = (req, res) => {
    var _a;
    let parts = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('/');
    var data = JSON.parse(records)["books"];
    data.splice(+parts[parts.length - 1] - 1, 1);
    res.end(JSON.stringify(data));
    // fs.writeFileSync(data);
    fs.writeFile('db.json', JSON.stringify(data), function (err) {
        if (err) {
            console.log("Error While Saving file");
        }
        ;
    });
};
const deleteBookListHamdler = (req, res) => {
};
const deleteNotFoundHandler = (req, res) => {
    res.end(`Not Found ${req.url}`);
};
export const delete_handler = (req, res) => {
    console.log(`Handling ${req.method}`);
    if (req.method === '/books')
        return deleteBookListHamdler(req, res);
    else if (req.url && req.url.length > 1 && req.url.indexOf('/books') === 0)
        return deleteBookDetailHandler(req, res);
    else
        return deleteNotFoundHandler(req, res);
};
// module.exports.delete_handler = delete_handler;
