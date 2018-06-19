const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,client)=> {

if (err)
{
    return console.log("unable to connect to mongodb");
}
console.log("connected to mongodb ");

const db = client.db("TodoApp");

db.collection("Users").deleteOne({_id:new ObjectID("5b2960b0b70c05a6b18d4d8c")}).then((user)=> {

    console.log(JSON.stringify(user, undefined, 2));
})

client.close();
})

