const { MongoClient } = require('mongodb');
const url = "mongodb+srv://new-user:fcg9N9UH2NtWsQ9@clustermern.qtl6k.mongodb.net/ClusterMern?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log('Connected!');
        const db = client.db('vivekdata');
        const col = db.collection('alldata');
        col.deleteOne({"_id": "6"}, function(err, obj){
            if(err) console.log(err);
            console.log("! Document Deleted");
        });
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }
}

run();