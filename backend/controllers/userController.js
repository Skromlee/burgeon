const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const UserDetails = require("../models/userDetailModel");

// ? Try to split the api and userModel to userModel + userDetails
// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {
        email,
        password,
        // firstname,
        // lastname,
        // phone,
        // citizen,
        // addressNo,
        // province,
        // district,
        // subdistrict,
        // postcode,
        // dob,
    } = req.body;

    console.log(req.body);

    if (!email && !password) {
        res.status(400);
        throw new Error("Please add all required fields");
    }

    //Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password goes here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword,
        // firstname,
        // lastname,
        // phone,
        // citizen,
        // addressNo,
        // province,
        // district,
        // subdistrict,
        // postcode,
        // dob,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            // firstname: user.firstname,
            // lastname: user.lastname,
            email: user.email,
            // phone: user.phone,
            // citizen: user.citizen,
            // addressNo: user.addressNo,
            // province: user.province,
            // district: user.district,
            // subdistrict: user.subdistrict,
            // postcode: user.postcode,
            // dob: user.dob,
            firstlogin: user.firstlogin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        console.log(user);
        res.json({
            _id: user.id,
            // fullname: user.firstname + " " + user.lastname,
            email: user.email,
            firstlogin: user.firstlogin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentails");
    }
});

// ? Use this contorller to serve token and firstlogin
// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// @desc Register user details
// @route POST /api/users/firstlogin
// @access Private
const firstLogin = asyncHandler(async (req, res) => {
    const {
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

    console.log(req.body);

    if (
        !firstname ||
        !lastname ||
        !phone ||
        !citizen ||
        !addressNo ||
        !province ||
        !district ||
        !subdistrict ||
        !postcode ||
        !dob
    ) {
        res.status(400);
        throw new Error("Please add all required fields");
    }

    //Check if user exists
    const userDetailsExist = await UserDetails.findOne({ citizen });

    if (userDetailsExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Create user
    const userDetails = await UserDetails.create({
        userId: req.user.id,
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

    if (userDetails) {
        await User.findByIdAndUpdate(
            req.user.id,
            { firstlogin: false },
            { new: true }
        );
        res.status(201).json({
            _id: userDetails.id,
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            phone: userDetails.phone,
            citizen: userDetails.citizen,
            addressNo: userDetails.addressNo,
            province: userDetails.province,
            district: userDetails.district,
            subdistrict: userDetails.subdistrict,
            postcode: userDetails.postcode,
            dob: userDetails.dob,
            userId: userDetails.userId,
            token: generateToken(userDetails._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// // @desc Update a user information
// // @route PUT /api/users/:id
// // @access Public
// const updateUserDetails = asyncHandler(async (req, res) => {
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
    registerUser,
    loginUser,
    getMe,
    firstLogin,
    // updateUser,
};
