let mongo = require("mongoose");
let user_collection = mongo.Schema({
    u_name:{
        type: String,
        required: true
    },
    u_email:{
        type: String,
        required: true
    },
    u_password:{
        type: String,
        required: true
    },
    u_gender:{
        type: String,
        required: true
    },
    u_age:{
        type: Number,
        required: true
        },
        created_at:{
            type: Date,
            default: Date.now
        },
        u_address:{
            type: String,
            required: true
        }
    
    });

    module.exports = mongo.model("Users",user_collection);