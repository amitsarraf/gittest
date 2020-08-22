const http = require("http");

const server = http.createServer(function(req, res) {
res.writeHead(200,{"content-type":"text/html"});

    res.write("<h1>node js is running pn port 3000</h1>");


    res.end();


}).listen(3000,()=>
console.log("server is rummimg on port 3000"));

