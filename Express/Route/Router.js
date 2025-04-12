//import Controller
let func = require("../Logics_function/Controller")
//Import Express
let express = require("express");
let Route = express.Router();
//Define Routes
Route.get("/",func.Home)
Route.get("/a",func.About)
Route.get("/b",func.Contact)
Route.get("/c",func.Help)
Route.get("/d",func.Service)
Route.get("/e",func.PrivacyPolicy)

// post route
Route.post("/save" , func.save_data)



module.exports = Route;
