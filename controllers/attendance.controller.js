const Attendance = require('../models/Attendance.model');

const checkIn = async (req,res)=>{
    const enter = new Date();
    const startCounting = new Attendance({
        date:enter.toLocaleDateString(),
        check_in:enter,
        employee_id:req.id,
    })
    try{
        let data = await startCounting.save();
        console.log(data)
        return res.status(200).json({
            message:"Successfully checkin."
        })
    }
    catch(error){
        return res.status(500).json({
            message:error
        })
    }
}
const checkOut = async (req,res)=>{
    try{
        const date = new Date();
        const todaysDate = date.toLocaleDateString();
        const todaysAttendance = await Attendance.findOne({employee_id:req.id,date:todaysDate});
        todaysAttendance.check_out = date;
        await todaysAttendance.save();
        return res.status(200).json({
            message:"Seccessfully updated."
        })
    }
    catch(error){
        return res.status(500).json({
            message:error
        })
    }
    
}

module.exports.checkIn = checkIn;
module.exports.checkOut = checkOut;