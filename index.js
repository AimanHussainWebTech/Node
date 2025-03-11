require("dotenv").config()
let http_module = require("http");
let port_no = process.env.PORT || 3001;

http_module.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");  
    res.end();
    })
.listen(port_no,()=>{
    console.log(`Server started at http://localhost:${port_no}`)
})
