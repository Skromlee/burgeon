const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

const adminProtect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // console.log(token, process.env.JWT_ADMIN_SECRET);
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
            // Get user from the token
            // console.log(decoded);
            req.admin = await Admin.findById(decoded.id).select("-password");

            if (req.admin.role !== "database administrator") {
                // console.log(req.admin.role);
                res.status(401);
                throw new Error("Not authorized, Permission denied");
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("not authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

module.exports = { adminProtect };
