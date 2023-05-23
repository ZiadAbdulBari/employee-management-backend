const express = require('express');
const route = express.Router();
const {addEmployee,employeeList, userDetails} = require('../controllers/employee.controller');
route.post('/add-employee',addEmployee);
route.get('/list-employee',employeeList);
route.get('/user-details/:id',userDetails);
module.exports = route;