const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenChecker');
const { getGeneralSettings, createRole, addProject, addEmployeeStataus } = require('../controllers/setting.controllers');

router.get('/get-settings/',tokenChecker,getGeneralSettings);
router.post('/add-role/',tokenChecker,createRole);
router.post('/add-project/',tokenChecker,addProject);
router.post('/add-employee-status/',tokenChecker,addEmployeeStataus);

module.exports = router;