const Employee = require('../models/Employee.model');
const nodemailer = require("nodemailer");
const addEmployee = async (req,res)=>{
    try{
        const newEmployee = new Employee({
            first_name:req.body.firstName,
            last_name:req.body.lastName,
            email:req.body.email,
            role:req.body.role,
            salary:req.body.salary,
        })
        await newEmployee.save();
        const findEmail = await Employee.findOne({email:req.body.email});
        const id = findEmail.id;
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ziadabdulbari01@gmail.com',
              pass: 'zstvrrpqyxuuuvxn',
            },
        });
        let data = await transporter.sendMail({
        from: 'ziadabdulbari01@gmail.com',
        to: req.body.email,
        subject: "Signup Invitation",
        text: "Hello world?",
        html: `<a href=http://localhost:5173/registration/?id=${id}>Signup</a>`,
        });
       transporter.sendMail(data).then(async ()=>{
            return res.status(200).json({
                message:"Invitation sent. Please check email."
            })
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message:error
        })
    }
}
const employeeList = async (req,res)=>{
    try{
        const list = await Employee.find();
        return res.status(200).json({
            "employeeList":list
        })
    }
    catch(error){
        return res.status(500).json({
            message:error,
        })
    }
}
const userDetails = async (req,res)=>{
    try{
        const details = await Employee.findOne({employee_id:req.params.id});
        res.status(200).json({
            "details":details
        })

    }
    catch(error){
        res.status(500).json({
            "message":error,
        })
    }
}
module.exports.addEmployee = addEmployee;
module.exports.employeeList = employeeList;
module.exports.userDetails = userDetails;