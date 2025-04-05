let mongo = require("mongoose");
require("dotenv").config();
 let db = process.env.DB_URL

 let db_func = async function(){
    mongo.connect(db).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((e)=>{
        console.log("Error connecting to MongoDB")
    })
 }
 module.exports = db_func;