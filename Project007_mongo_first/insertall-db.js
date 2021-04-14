const { MongoClient } = require('mongodb');
const url = "mongodb+srv://new-user:fcg9N9UH2NtWsQ9@clustermern.qtl6k.mongodb.net/ClusterMern?retryWrites=true&w=majority";
const fs = require('fs');

var records;
fs.readFile('db.json', 'utf8', function(err, data) {
    if(err){
        console.log("Error While Loading data");
    }
    else
        records = JSON.parse(data)["books"];
        // records.forEach(elem => {
        //     console.log(elem["title"]);
        // })
})



const client = new MongoClient(url);
const dbName = 'vivekdata';

async function run(){
    try{
        await client.connect();
        console.log("Connected to Database!");
        const db = client.db(dbName);
        const col = db.collection('alldata');

        await col.insertMany(records);
        const myDocs = await col.find();
        myDocs.forEach(elem => {
            console.log(elem["title"]);
        })
    }
    catch(err){
        console.log(err.stack);
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir);