const events = require("events");

const event = new events.EventEmitter();
const firstEvent = function(n1,n2){
    console.log(n1*n2);
    event.emit("click2")
}

const secondEvent = function(){
    console.log("second event triggered");
    event.emit("click3");
}

const thirdEvent = function(){
    console.log("third event created");
}
event.on("click2",secondEvent);
event.on("click3",thirdEvent);
event.on("click",firstEvent);
event.emit("click",4,5);