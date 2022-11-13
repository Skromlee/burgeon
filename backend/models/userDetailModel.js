const mongoose = require("mongoose");

const userDetailSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        firstname: {
            type: String,
            //   required: [true, "Please add a firstname"],
        },
        lastname: {
            type: String,
            //   required: [true, "Please add a lastname"],
        },
        phone: {
            type: Number,
            //   required: [true, "Please add a phone number"],
        },
        citizen: {
            type: Number,
            //   required: [true, "Please add a citizen number"],
            unique: true,
        },
        addressNo: {
            type: String,
            //   required: [true, "Please add address number"],
        },
        province: {
            type: String,
            //   required: [true, "Please add a province"],
        },
        district: {
            type: String,
            //   required: [true, "Please add a district"],
        },
        subdistrict: {
            type: String,
            //   required: [true, "Please add a subdistrict"],
        },
        postcode: {
            type: Number,
            //   required: [true, "Please add a postcode"],
        },
        dob: {
            type: Date,
            //   required: [true, "Please add a date of birth"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("UserDetails", userDetailSchema);
