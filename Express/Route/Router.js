//import Controller
let func = require("../Logics_function/Controller")
//Import Express
let express = require("express");
let Route = express.Router();
//Define Routes
Route.get("/",func.index)
Route.get("/a",func.About)
Route.get("/c",func.Contact)



module.exports = Route;
