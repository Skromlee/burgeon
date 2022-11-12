const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");

// @desc Register new Employee
// @route POST /api/manages/employees
// @access Private Only Manager
const registerEmployee = asyncHandler(async (req, res) => {
    const {
        email,
        password,
        role,
        firstname,
        lastname,
        phone,
        citizen,
        addressNo,
        province,
        district,
        subdistrict,
        postcode,
        dob,
    } = req.body;

    if (!email && !password) {
        res.status(400);
        throw new Error("Please add all required fields");
    }

    //Check if user exists
    const userExists = await Employee.findOne({ email });
    const userExists2 = await Employee.findOne({ citizen });

    if (userExists || userExists2) {
        res.status(400);
        if (userExists) {
            throw new Error("Employee already exists by email");
        } else if (userExists2) {
            throw new Error("Employee already exists by citizen NO.");
        }
    }

    // Hash password goes here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create Employee
    const employee = await Employee.create({
        email,
        password: hashedPassword,
        role,
        firstname,
        lastname,
        phone,
        citizen,
        addressNo,
        province,
        district,
        subdistrict,
        postcode,
        dob,
    });
    if (employee) {
        res.status(201).json({
            _id: employee.id,
            fullname: employee.firstname + " " + employee.lastname,
            email: employee.email,
            role: employee.role,
            phone: employee.phone,
            citizen: employee.citizen,
            address: {
                addressNo: employee.addressNo,
                province: employee.province,
                district: employee.district,
                subdistrict: employee.subdistrict,
                postcode: employee.postcode,
            },
            dob: employee.dob,
            token: generateToken(employee._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid employee data");
    }
});

// @desc Update current Employee details
// @route POST /api/manages/employees/:id
// @access Private Only Manager
const updateEmployee = asyncHandler(async (req, res) => {
    console.log("Update Request");
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        res.status(400);
        throw new Error("Employee not found");
    }

    // Check for admin
    if (!req.admin) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedEmployee);
});

// @desc Get employees data
// @route GET /api/manages/employees
// @access Private only manager
const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({}).select("-password");
    res.status(200).json(employees);
});

// // @desc Update a user information
// // @route PUT /api/users/:id
// // @access Private
// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         res.status(400);
//         throw new Error("User not found");
//     }

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//     }).select("-password");

//     res.status(200).json(updatedUser);
// });

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = {
    registerEmployee,
    updateEmployee,
    getEmployees,
    // getMe,
    // updateUser,
};