const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const settings = new Schema({
    role:{
        type:Array,
        default:[],
    },
    holiday:{
        type:Array,
        default:[]
    },
    start_time:{
        type:Date,
        default:null
    },
    end_time:{
        type:Date,
        default:null
    },
    project:{
        type:Array,
        default:[]
    },
    employee_status:{
        type:Array,
        default:[]
    }
})

module.exports = new model('Settings',settings);