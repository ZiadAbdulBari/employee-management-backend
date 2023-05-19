const jwt = require('jsonwebtoken');
const tokenChecker =async (req,res,next)=>{
    const token = req.headers.token;
    try{
        const decode = await jwt.verify(token, process.env.JWT_TOKEN);
        const {id,email} = decode;
        req.id=id;
        req.email=email;
        next();
    }
    catch{
        res.status(401).json({
            "mgs":"Authentication Failed"
        })
        next("Authentication Failed");
    }
    // console.log(decode);
}
module.exports = tokenChecker;