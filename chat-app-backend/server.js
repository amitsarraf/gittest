require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("error", (err) =>{
    console.log("mongoose connection error" + err.message);
});

mongoose.connection.once("open", () =>{
    console.log("Database connected")
});

//bringing the models
require("./models/user");
require("./models/chatroom");
require("./models/chatmessage");


const app = require("./app");

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})