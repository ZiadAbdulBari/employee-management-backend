const Employee = require ('../models/Employee.model');

const filterEmployee = async(req,res)=>{
    try{
        let query={};
        const fieldName = Object.keys(req.query);
        fieldName.map((key)=>{
            if( req.query[key]!='false'){
                let qyeryValue = req.query[key];
                query[key] = { $in: qyeryValue.split(',') };
            }
        })
        const filteredData = await Employee.find(query);
        if(filteredData.length>0){
            return res.status(200).json({
                filteredData
            })
        }
        else{
            return res.status(200).json({
                message:"No data found."
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:error
        })
    }
}

module.exports.filterEmployee = filterEmployee;