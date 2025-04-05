let exp = require("express");
let ro = require("./Route/Router");
const db = require("./Connection");
require ("dotenv").config();

let myapp = exp()
myapp.use("/aiman/",ro);

db().then(()=>{
    myapp.listen(process.env.PORT,()=>{
        console.log(`server is started at http://localhost:${process.env.PORT} `);
    })
}).catch((e)=>{
    console.log(e);
})

