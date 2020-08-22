const fs= require("fs");

try{
    const data = fs.readFileSync(__dirname+"/hello.txt","utf8");
    console.log(data);

}
catch(e){
    console.log(e);

}

//fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    
  //  console.log(data);
//})
console.log("samarika dahait");