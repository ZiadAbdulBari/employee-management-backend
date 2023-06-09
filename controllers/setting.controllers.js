const Settings = require('../models/Settings.model');
const getGeneralSettings = async(req,res)=>{
    try{
        const settingData = await Settings.find();
        return res.status(200).json({
            settingData
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
}
const createRole = async(req,res)=>{
    try{
        let addNewRole = await Settings.find();
        if(addNewRole.length==0){
            const setting = new Settings();
            await setting.save();
            addNewRole = await Settings.find();
        }
        addNewRole[0].role.push(req.body.newRole);
        await addNewRole[0].save();
        return res.status(200).json({
            message:"Successfully created a role."
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Somthing went wrong",
            status:500
        })
    }
}
const addProject = async(req,res)=>{
    try{
        let addNewProject = await Settings.find();
        if(addNewProject.length==0){
            const setting = new Settings();
            await setting.save();
            addNewProject = await Settings.find();
        }
        addNewProject[0].project.push(req.body.newProject);
        await addNewProject[0].save();
        return res.status(200).json({
            message:"Successfully added a project."
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Somthing went wrong",
            status:500
        })
    }
}
const addEmployeeStataus = async(req,res)=>{
    try{
        let addNewStatus = await Settings.find();
        if(addNewStatus.length==0){
            const setting = new Settings();
            await setting.save();
            addNewStatus = await Settings.find();
        }
        addNewStatus[0].employee_status.push(req.body.newStatus);
        await addNewStatus[0].save();
        return res.status(200).json({
            message:"Successfully added a employee status."
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Somthing went wrong",
            status:500
        })
    }
}
const deteleRole = async(req,res)=>{
    try{
        let removeRole = await Settings.find();
        await removeRole[0].role.pull(req.body.role);
        await removeRole[0].save();
        return res.status(200).json({
            message:"Successfully deleted."
        })
    }
    catch(error){
        console.log(error);
        return res.status(200).json({
            message:"Something went wrong"
        })
    }
}
const deteleProject = async(req,res)=>{
    try{
        let removeProject = await Settings.find();
        await removeProject[0].project.pull(req.body.project);
        await removeProject[0].save();
        return res.status(200).json({
            message:"Successfully deleted."
        })
    }
    catch(error){
        console.log(error);
        return res.status(200).json({
            message:"Something went wrong"
        })
    }
}
const deteleEmployeeStatus = async(req,res)=>{
    try{
        let removeStatus = await Settings.find();
        await removeStatus[0].employee_status.pull(req.body.employeeStatus);
        await removeStatus[0].save();
        return res.status(200).json({
            message:"Successfully deleted."
        })
    }
    catch(error){
        console.log(error);
        return res.status(200).json({
            message:"Something went wrong"
        })
    }
}
module.exports.getGeneralSettings = getGeneralSettings;
module.exports.createRole = createRole;
module.exports.addProject = addProject;
module.exports.addEmployeeStataus = addEmployeeStataus;
module.exports.deteleRole = deteleRole;
module.exports.deteleProject = deteleProject;
module.exports.deteleEmployeeStatus = deteleEmployeeStatus;