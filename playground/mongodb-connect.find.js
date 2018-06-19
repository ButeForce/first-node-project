const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,client)=> {

if (err)
{
    return console.log("unable to connect to mongodb");
}
console.log("connected to mongodb ");

const db = client.db("TodoApp");

db.collection("Todos").find({completed: false}).toArray().then((docs)=> {
console.log("Todos");
console.log(docs);

}, (err)=> {"unable to fetch records", err })

db.collection("Users").find({name: "hamdi"}).toArray().then((docs)=> {
    console.log("Todos");
    console.log(docs);
    
    }, (err)=> {"unable to fetch records", err })

    db.collection("Users").find({name: "ayman"}).count().then((count)=> {
        console.log("Todos");
        console.log(count);
        
        }, (err)=> {"unable to fetch records", err })

client.close();
});

