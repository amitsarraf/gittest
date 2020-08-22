//catch errors

exports.catchErrors = (fn)=>{
return function (req,res,next){
    fn(req, res, next).catch((err)=>{
        //validation errors
        if(typeof err === "string"){
            res.status(400).json({
                message: err,
            });
        }else{
            next(err);
        }
    });
};
};

//mongodb validation errors

exports.mongooseErrors = (req, res, next)=>{
    if(!err.errors) return next(err);
    const errorKeys = object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key)=>(message += err.errors[key].message + ","));

    message = message.substr(0, message.length - 2);

    res.status(400).json({
        message,
    });
};

// development errors


exports.developmentErrors = (err, req, res, next)=>{
    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };
    res.status(err.status || 500).json(errorDetails);
};

//production errs

exports.productionErrors = (err, req, res, next) =>{
    res.status(err.status || 500).json({
        error: "internal server Error",
    });
};

// page errors
exports.notFound = (req, res, next) =>{
    res.status(404).json({
        message:"route not found",
    });
};