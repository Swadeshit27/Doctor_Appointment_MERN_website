const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    specialist: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },

});
module.exports = mongoose.model("DoctorData", DoctorSchema)