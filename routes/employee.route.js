const express = require('express');
const route = express.Router();
const {addEmployee,employeeList, userDetails} = require('../controllers/employee.controller');
const tokenChecker = require('../middleware/tokenChecker');
route.post('/add-employee/',addEmployee);
route.get('/list-employee/',tokenChecker,employeeList);
route.get('/user-details/',tokenChecker,userDetails);
module.exports = route;