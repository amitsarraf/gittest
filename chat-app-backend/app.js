const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//bringing the routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));



//setup errorHandlers
const errorhandlers = require("./error handeler/err handler");
app.use(errorhandlers.notFound);
app.use(errorhandlers.mongooseErrors);
if(process.env.ENV === "DEVELOPMENT"){
    app.use(errorhandlers.developmentErrors);
} else{
    app.use(errorhandlers.productionErrors);
}

module.exports = app;