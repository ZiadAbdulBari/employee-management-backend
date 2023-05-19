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
            service: 'gmail', // true for 465, false for other ports
            auth: {
              user: 'ziadabdulbari01@gmail.com', // generated ethereal user
              pass: 'zstvrrpqyxuuuvxn', // generated ethereal password
            },
        });
        let data = await transporter.sendMail({
        from: 'ziadabdulbari01@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<a href='https://www.facebook.com/'>Signup</a>", // html body
        });
       transporter.sendMail(data).then(async (info)=>{
            console.log(info);
            return res.status(200).json({
                message:"Invitation sent"
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
module.exports.addEmployee = addEmployee;