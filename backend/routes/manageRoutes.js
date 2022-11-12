const express = require("express");
const router = express.Router();
const {
    registerEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/manageController");
const { adminProtect } = require("../middleware/adminAuthMiddleware");

// Protect Middleware goes here

// Employees
router.post("/employees", adminProtect, registerEmployee);
router.post("/employees/:id", adminProtect, updateEmployee);
router.get("/employees", adminProtect, getEmployees);
router.delete("/employees/:id", adminProtect, deleteEmployee);

module.exports = router;
