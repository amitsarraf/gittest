const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json());

app.use(express.static('public'));
app.set("view engine","twig");
app.set("views","./public/views");

app.get("/",(req,res)=>{
    res.render("index", {tittle:"login form",message:"enter username and password"});
})
app.post("/",urlencodedParser,
[check('username',"username should be email").isEmail(),
check('password',"password must be 8 chracters").isLength({ min: 5 })],
(req,res)=>{
    const errors = validationResult(req);
    console.log(errors.mapped());
    res.render("index", {tittle:"User Details",error:errors.mapped()});
})

app.get("/about/:a-:b",(req,res)=>{
    res.render("about", {tittle:"About",sum:parseInt(req.params.a) + parseInt(req.params.b),
    sub:parseInt(req.params.a) - parseInt(req.params.b),
    mul:parseInt(req.params.a) * parseInt(req.params.b)});
})



app.listen(3000,()=>console.log("server is running on  port 3000"));