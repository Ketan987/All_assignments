const fs = require('fs');
var records = fs.readFileSync('db.json', 'utf8');

const deleteBookDetailHandler = (req, res) => {
    let parts = req.url.split('/');
    var data = JSON.parse(records)["books"];
    data.splice(+parts[parts.length-1]- 1, 1);
    res.end(JSON.stringify(data));
    // fs.writeFileSync(data);

}

const deleteBookListHamdler = (req, res) => {
    
}

const deleteNotFoundHandler = (req, res) => {
    res.send(`Not Found ${req.url}`);
}

const delete_handler = (req, res) => {
    console.log(`Handling ${req.method}`)
    if(req.method === '/books')
        return deleteBookListHamdler(req, res);
    else if(req.url && req.url.length>1 && req.url.indexOf('/books')===0)
        return deleteBookDetailHandler(req, res);
    else
        return deleteNotFoundHandler(req, res);
}

module.exports.delete_handler = delete_handler;