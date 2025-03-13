require("dotenv").config()
let http_module = require("http");
let {exec} = require("child_process");
let port_no = process.env.PORT || 3001;

http_module.createServer(function(req,res){
   if (req.url ==="/") {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(`<h1>Home Page</h1>
    <ul>
    <li><a href="/a">Go to Contact page</a></li>
    <li><a href="/b">Go to About page</a></li>
    <li><a href="/c">Go to Service page</a></li>
    <li><a href="/d">Go to navbar page</a></li>
</ul>`) 
    res.end()
   }
   else if (req.url==="/a"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<h1>About Page</h1>
    <ul>
    <li><a href="/b">Go to About page</a></li>
    <li><a href="/c">Go to Service page</a></li>
    <li><a href="/d">Go to navbar page</a></li>
</ul>`) 
    res.end()
}
else if (req.url==="/b"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<h1>Contact Page</h1>
    <ul>
    <li><a href="/b">Go to About page</a></li>
    <li><a href="/c">Go to Service page</a></li>
    <li><a href="/d">Go to navbar page</a></li>
</ul>`) 
    
    res.end()
    }else if (req.url==="/c"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Service Page</h1>
        <ul>
    <li><a href="/b">Go to About page</a></li>
    <li><a href="/c">Go to Service page</a></li>
    <li><a href="/d">Go to navbar page</a></li>
</ul>`)
        res.end()
        }else if (req.url==="/d"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<h1>navbar Page</h1>
            <ul>
    <li><a href="/b">Go to About page</a></li>
    <li><a href="/c">Go to Service page</a></li>
    <li><a href="/d">Go to navbar page</a></li>
</ul>`)
         res.end()
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("<h1 style='color:red'>Page Not Found</h1>");
            res.end()
        }
        }).listen(port_no,()=>{
    console.log(`Server started at http://localhost:${port_no}`)
    let u = `http://localhost:${port_no}`;
    if (process.platform == "win32"){
        exec(`start ${u}`)
        }
    })
