let nodemailer= require('nodemailer')
require("dotenv").config()

let email_info = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})
let email_body={
to:["sanaahmedqureshi205@gmail.com","ma7506363@gmail.com","shaikh.sahab.zindabad@gmail.com"],
from: process.env.EMAIL,
subject: "Test Email",
html: "<h5>Hello, this is a test email sent using Node.js</h5>"

}
email_info.sendMail(email_body, function(error,info){
    if(error){
        console.log("Something Went Wrong")
        console.log(error)
    }else{
        console.log(`Email Has Been Sent ${email_body.to}`)
        console.log(info)
    }
})