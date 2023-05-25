const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const settings = new Schema({
    role:{
        type:Array
    },
    holiday:{
        type:Array
    },
    start_time:{
        type:Date
    },
    end_time:{
        type:Date
    },
    project:{
        type:Array
    },
    employee_status:{
        type:Array
    }
})

module.exports = new model('Settings',settings);