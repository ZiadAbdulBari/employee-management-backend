const express = require('express');
const route = express.Router();
const {addEmployee} = require('../controllers/employee.controller');
route.post('/add-employee',addEmployee);

module.exports = route;