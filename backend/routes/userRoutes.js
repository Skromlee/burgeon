const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
    firstLogin,
    // updateUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// Protect Middleware goes here

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/firstlogin", protect, firstLogin);
router.get("/me", protect, getMe);
// router.put("/:id", protect, updateUser);

module.exports = router;
