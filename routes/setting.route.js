const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenChecker');
const { getGeneralSettings, createRole, addProject, addEmployeeStataus, deteleRole, deteleProject, deteleEmployeeStatus } = require('../controllers/setting.controllers');

router.get('/get-settings/',tokenChecker,getGeneralSettings);
router.post('/add-role/',tokenChecker,createRole);
router.post('/add-project/',tokenChecker,addProject);
router.post('/add-employee-status/',tokenChecker,addEmployeeStataus);
router.post('/delete-role/',tokenChecker,deteleRole);
router.post('/delete-project/',tokenChecker,deteleProject);
router.post('/delete-employee-status/',tokenChecker,deteleEmployeeStatus);

module.exports = router;