const express = require("express");
const router = express.Router();
const Employeecontroller = require("../Employeecontrollers/employee_controller");
// const Employee = require("../models/Employee");

router.post("/register", Employeecontroller.signup); // register new employee
router.post("/login", Employeecontroller.login); // login employee
// get all employees

module.exports = router;
