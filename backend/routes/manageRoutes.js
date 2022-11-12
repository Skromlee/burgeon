const express = require("express");
const router = express.Router();
const {
    registerEmployee,
    getEmployees,
    updateEmployee,
    // registerAdmin,
    // loginAdmin,
    // getMe,
    // updateUser,
} = require("../controllers/manageController");
// const { protect } = require("../middleware/authMiddleware");
const { adminProtect } = require("../middleware/adminAuthMiddleware");

// Protect Middleware goes here

// Employees
router.post("/employees", adminProtect, registerEmployee);
router.post("/employees/:id", adminProtect, updateEmployee);
router.get("/employees", adminProtect, getEmployees);
// router.post("/login", loginAdmin);
// router.get("/me", protect, getMe);
// router.put("/:id", protect, updateUser);

module.exports = router;
