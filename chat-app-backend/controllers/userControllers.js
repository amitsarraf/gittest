const mongoose = require ("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");


exports.register = async(req, res)=>{
    const {name , email, password} = req.body;

    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

    if(!emailRegex.test(email)) throw "Email is not supported ";
    if(password.length < 8) throw "password must have atleast 8 characters";

    const userExist = await User.findOne({
        email,
    });
    if (userExist) throw "User already exists";

    

    const user = new User({name , email, password: sha256(password + process.env.SALT)});

    await user.save();

    res.status(200).json({
        message: "User ["+ name +"] Registered Successfully"
    });
};


exports.login = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });
    if (!user) throw "Email and password did not match";

   const token = await jwt.sign({id: user.id}, process.env.SECRET)

   res.status(200).json({
       message:"User logged in successfully",
       token,
   });
};