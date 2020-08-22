const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Name is required" 
    },
    email:{
        type: String,
        required:"Email is required"
    },
    password: {
        type: String,
        required:"password is required"
    },
},
{
    timestamps: true, //helps to know when user was created or last updated
}
);

module.exports = mongoose.model("User", userSchema);