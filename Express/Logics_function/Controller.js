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
         }
}



module.exports = Functions;
