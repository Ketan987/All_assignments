
const MongoClient = require('mongodb').MongoClient;
const eve = require('dotenv');
eve.config();
const url = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@${process.mongodb_server}/ClusterMern?retryWrites=true&w=majority`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db('vivekdata');
        const col = db.collection('alldata');
        const myDocs = await col.find();
        myDocs.forEach(elem => {
            console.log(elem["title"]);
        })
    }catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);