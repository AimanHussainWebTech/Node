let mongodb = require("mongoose");
require("dotenv").config()
let url = process.env.ATLAS_URI
console.log()
mongodb.connect("mongodb+srv://hussainaiman545:aiman545@clustera.f0kqf.mongodb.net/Users?retryWrites=true&w=majority&appName=ClusterA").then(()=>{
    console.log("Connected to database")
}).catch((e)=>{
    console.log(e)
})