let Health= require("mongoose");

let Health_Collection=Health.Schema({
    BP:{
        type:Number,
        required:true
    },
    Heart_rate:{
        type:Number,
        required:true
    },
   Sugar:{
        type:Number,
        required:true
        },
        colestrol:{
            type:Number,
            required:true
        },
        created_at:{
            type:Date,
            default:Date.now
        }
});
module.exports=Health.model("Health",Health_Collection);