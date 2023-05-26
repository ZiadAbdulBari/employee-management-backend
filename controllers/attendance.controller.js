const Attendance = require('../models/Attendance.model');

const signon = async (req,res)=>{
    const enter = new Date();
    const startCounting = new Attendance({
        date:enter.toLocaleDateString(),
        check_in:req.body.time,
        employee_id:req.id,
    })
    try{
        await startCounting.save();
        return res.status(200).json({
            message:"Successfully signon."
        })
    }
    catch(error){
        return res.status(500).json({
            message:error
        })
    }
}
const signoff = async (req,res)=>{
    try{
        const date = new Date();
        const todaysDate = date.toLocaleDateString();
        const todaysAttendance = await Attendance.findOne({employee_id:req.id,date:todaysDate});
        todaysAttendance.check_out = req.body.time;
        await todaysAttendance.save();
        // console.log(todaysAttendance);
        return res.status(200).json({
            message:"Thnak you."
        })
    }
    catch(error){
        return res.status(500).json({
            message:error
        })
    }
    
}
const getMonthlyAttendance = async(req,res)=>{
    try{
        const getAttendance = await Attendance.find({employee_id:req.id,
            $expr: {
              $and: [
                { $eq: [{ $month: '$date' }, req.body.month] },
                { $eq: [{ $year: '$date' }, req.body.year] }
              ]
            }
          })
        // console.log(getAttendance);
        return res.status(200).json({
            getAttendance
        })

    }
    catch(error){
        console.log(error);
    }
}
module.exports.signon = signon;
module.exports.signoff = signoff;
module.exports.getMonthlyAttendance = getMonthlyAttendance;