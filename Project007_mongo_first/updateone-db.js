const { MongoClient } = require('mongodb');
const url = "mongodb+srv://new-user:fcg9N9UH2NtWsQ9@clustermern.qtl6k.mongodb.net/ClusterMern?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "vivekdata";

async function run() {
    try {
        await client.connect();
        console.log("Connected to Mongodb!");
        const db = client.db(dbName);
        const col = db.collection('alldata');
        col.updateOne({"_id" : "2"}, {"$set" : {"title" : "Ketan Pise and the Philosopher's stone"}});
        console.log("Sucessfully Updated");
    }catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir);