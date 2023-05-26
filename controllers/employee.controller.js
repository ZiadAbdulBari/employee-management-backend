const Employee = require('../models/Employee.model');
const Profile = require("../models/Profile.model");
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
        const id = findEmail._id;
        console.log(id)
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
        const details = await Employee.findOne({employee_id:req.id});
        return res.status(200).json({
            details
        })

    }
    catch(error){
        res.status(500).json({
            "message":error,
        })
    }
}
const updateEmployeeProfile = async(req,res)=>{
    try{
        const profile = await Profile.findOne({employee_id:req.id});
        profile.employee_id = req.body.employee_id;
        profile.first_name = req.body.first_name;
        profile.last_name = req.body.last_name;
        profile.last_name = req.body.last_name;
        profile.NID = req.body.NID;
        profile.contact_number = req.body.contact_number;
        profile.emargency_contact_number = req.body.emargency_contact_number;
        profile.official_email = req.body.official_email;
        profile.personal_email = req.body.personal_email;
        profile.role = req.body.role;
        profile.employee_status = req.body.employee_status;
        profile.joining_date = req.body.joining_date;
        profile.present_address = req.body.present_address;
        profile.permanent_address = req.body.permanent_address;
        // console.log(profile);
        // return
        await profile.save();
        return res.status(200).json({
            message:"Profile successfully updated."
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Something Went wrong."
        })
    }
}
const LoadProfileData = async(req,res)=>{
    try{
        let profileData = await Profile.findOne({employee_id:req.id});
        return res.status(200).json({
            profileData
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Something went wrong."
        })
    }
}
module.exports.addEmployee = addEmployee;
module.exports.employeeList = employeeList;
module.exports.userDetails = userDetails;
module.exports.updateEmployeeProfile = updateEmployeeProfile;
module.exports.LoadProfileData = LoadProfileData;