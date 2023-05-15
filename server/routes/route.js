require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken")


const User = require("../model/collection");
const DoctorData = require("../model/AdminCollection")
const PatientData = require("../model/patientData")
// const authenticate = require("../middleware/authentucate")

router.get("/", (req, res) => {
    console.log("hello i am home page");
    res.send("hello this is home page router js");
});

// using async-await
router.post("/signup", async (req, res) => {
    const { name, email, mobile, password, cpassword } = req.body;
    if (!name || !email || !mobile || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ massage: "Email already exist" });
        }
        const user = new User({
            name,
            email,
            mobile,
            password,
            cpassword,
        });
        if (password !== cpassword) {
            return res
                .status(422)
                .json({ massage: "password and confirm password not match" });
        }
        //   pre password hash
        //   generate jesonwebtoken
        // const generatetoken = await user.generatetoken();
        // console.log(generatetoken);
        // res.cookie("jwtoken", generatetoken, {
        //   expires: new Date(Date.now() + 50000000),
        //   httpOnly: true,
        // });

        await user.save();
        return res.status(201).json({ massage: "user registered successfully" });
    } catch (error) {
        console.log(error);
    }
});

let userdetails;
// create log in 
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            const ismatch = await bcrypt.compare(password, userExist.password);
            //   generate jesonwebtoken
            const generatetoken = await userExist.generatetoken();
            if (ismatch) {
                await userExist.save();
                userdetails = userExist;
                // console.log(userdetails);
                return res.status(201).json({ massage: "Log in successful", token: generatetoken });
            }
            else return res.status(400).json({ massage: "Invalid details" });
        }
        return res.status(400).json({ massage: "Email not exist" });
    } catch (error) {
        console.log(error);
    }
});

//For inser data of doctors
router.post("/doctorData", async (req, res) => {
    // console.log(req.body)
    const { name, email, phone, degree, specialist, experience, age, time, fee } = req.body;
    if (!name || !email || !phone || !degree || !specialist || !experience || !age || !time || !fee) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ massage: "Email already exist" });
        }
        const DrData = new DoctorData({
            name, email, phone, degree, specialist, experience, age, time, fee
        });
        await DrData.save();
        return res.status(201).json({ massage: "user registered successfully" });
    } catch (error) {
        console.log(error);
    }
});

// send doctors list
router.get("/doctorsList", (req, res) => {
    try {
        res.status(201).send(global.doctors)
    } catch (error) {
        console.log(error)
    } 
})
// rendering user details
router.post("/aboutUser", async (req, res) => {
    try {
        // console.log(req.body.token)
        const veryfytoken = jwt.verify(req.body.token, "ashfsjdfsjdjfisdajoijoisfadjoisifdjisdfaiufsdasdfsd");
        const user = await User.findOne({ _id: veryfytoken._id })
        // console.log(user)
        res.status(201).send(user)
    } catch (error) { 
        console.log(error)
    }
})
//patient appoitment  information
router.post("/patientdata", async (req, res) => {
    // console.log(req.body)
    const { data, patient, gender, age, appoitmetdate, problem } = req.body;
    if (!data || !patient || !gender || !age || !appoitmetdate || ! problem) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const patientData = new PatientData({
            data, patient, gender, age, appoitmetdate, problem
        });
        await patientData.save();
        return res.status(201).json({ massage: "user registered successfully"});
    } catch (error) {
        console.log(error);
    }
})
//appoitment  data
router.get("/appoitmentData", async (req, res) => {
    try {
        // console.log(global.patientdatas)
        return res.status(201).send(global.patientdatas);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
