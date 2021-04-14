
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://new-user:fcg9N9UH2NtWsQ9@clustermern.qtl6k.mongodb.net/ClusterMern?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);