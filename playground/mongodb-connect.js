const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,client)=> {

if (err)
{
    return console.log("unable to connect to mongodb");
}
console.log("connected to mongodb ");

const db = client.db("TodoApp");

// db.collection("Todos").insertOne({
// text:"something to do",
// completed: false

// }, (err, result)=>{
//     if(err){

//         return console.log("unable to insert a document" , err);
//     }

//     console.log(JSON.stringify(result.ops,undefined,2));
// })



db.collection("Users").insertOne({

    name:"ayman",
    age:"39",
    location:"Riyadh, Dahyet Laban"
}, (err,result)=> {

    if(err){
        console.log("unable to insert document", err);
    }

    console.log("successfully inserted" ,JSON.stringify(result.ops, undefined,2));

})


client.close();
});

