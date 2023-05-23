const Auth  = require('../models/Auth.model');
const Employee = require('../models/Employee.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registration = async (req,res)=>{
    let email = req.body.email
    if(req.query.id!=''){
        let employee = await Employee.findOne({_id:req.query.id})
        email = employee.email;
    }
    const emailCheck  = await Auth.findOne({email:email});
    if(emailCheck){
        return res.status(409).json({
            "status": 409,
            "mgs": "Try another email"
        })
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new Auth({
        email: email,
        password: password,
    })
    try{
        await user.save();
        const newUser = await Auth.findOne({email:email});
        const newEmployee = await Employee.findOne({email:email});
        const employeeId = newUser._id;
        newEmployee.employee_id = employeeId;
        await newEmployee.save();
        return res.status(200).json({
            "status":200,
            "mgs":"successfully created",
        })
    }
    catch(error){
        return res.status(500).json({
            "status":500,
            "mgs":error,
        })
    }
}
const login = async (req,res)=>{
    try{
        // const email = req.body.email;
        const checkEmail = await Auth.find({email:req.body.email});
        if(checkEmail.length>0){
            // const hashedPass = await bcrypt.hash(req.body.password, 10);
            const checkPassword = await bcrypt.compare(req.body.password,checkEmail[0].password);
            if(checkPassword){
                const token = jwt.sign({ id: checkEmail[0]._id, email: checkEmail[0].email }, process.env.JWT_TOKEN);
                res.status(200).json({
                    "access_token": token,
                    "mgs": "logged in",
                })
            }
            else{
                res.status(401).json({
                    "mgs": "Failed",
                })
            }
        }
        else{
            res.status(401).json({
                "mgs": "Authentication failed"
            })
        }
    }
    catch{
        res.status(500).json({
            "mgs": "Server error"
        })
    }
}
module.exports.registration=registration;
module.exports.login=login;