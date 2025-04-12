const UserModel = require("../Collections/UserModel");

let Functions ={
     Home : async function(req,res){
        res.send("Home Page");
        res.end()
    },
    
     About : async function(req,res){
        res.send("About Page");
        res.end()
    },
   Contact : async function(req,res){
        res.send("Contact Page");
        res.end()

    },
    Service : async function(req,res){
        res.send("Service");
        res.end()
     },
      Feedback : async function(req,res){
    res.send("Feedback");
    res.end()
     },
     Help : async function(req,res){
    res.send("Help");
    res.end()
     },
     PrivacyPolicy: async function(req,res){
        res.send("PrivacyPolicy");
        res.end()
         },
         save_data:async function(req,res){
            try{
            console.log("Received Data" , req.body);
            let user_give_data= new UserModel(req.body)
            let saving = await user_give_data.save();
            res.status(201).json({msg : "Data Saved Successfully" , data:saving});
         }catch(error){
            console.log(error)
            res.status(500).json({msg : "Error Occured" , error : error});
         }
         }
}



module.exports = Functions;
