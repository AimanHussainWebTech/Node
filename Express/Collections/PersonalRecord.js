let Person= require("mongoose");

let personal_collection=Person.Schema({
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
        },
        BMI:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        created_at:{
            type:Date,
            default:Date.now
        }
});
module.exports=Person.model("PersonRecord",personal_collection);