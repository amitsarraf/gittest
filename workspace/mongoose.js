var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    Etype:String,
    hourRate:Number,
    totalHour: Number
});
employeeSchema.methods.totalSalary=function(){
    console.log("the total income of %s is %d ", this.name,  +  this.hourRate*this.totalHour);
}

var employeeModel = mongoose.model("Employee", employeeSchema);
var employees = new employeeModel({name:"ameet",
email:"amit@gmail.com",
Etype: "manager",
hourRate:5,
totalHour:12
});



employees.totalSalary()