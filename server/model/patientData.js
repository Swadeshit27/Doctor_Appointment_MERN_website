const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    data: {
        type: Array,
        required: true,
    },
    patient: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    appoitmetdate: {
        type: Date,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
   

});
module.exports = mongoose.model("PatientData", PatientSchema)