const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

// const uri = "mongodb://127.0.0.1:27017/FoodUserData";
const uri = "mongodb://swadesh27:Swadesh123@ac-22ozexh-shard-00-00.xyidfux.mongodb.net:27017,ac-22ozexh-shard-00-01.xyidfux.mongodb.net:27017,ac-22ozexh-shard-00-02.xyidfux.mongodb.net:27017/DoctorApp?ssl=true&replicaSet=atlas-7k74m9-shard-0&authSource=admin&retryWrites=true&w=majority"; 

const client = new MongoClient(uri);

async function run() {
    try {
        await mongoose.connect(uri)
        // await client.connect()
        console.log("connected to database")
        const db = client.db('DoctorApp');
        const doctors = db.collection('doctordatas');
        // const Foodcatagory = db.collection('FoodCatagory');
        global.doctors = await doctors.find().toArray(function (err, e) {
            if (err) console.log(err);
            else console.log(e)
        })
        // console.log(global.doctors)
        // global.foodcatagory = await Foodcatagory.find().toArray(function (err, e) {
        //     if (err) console.log(err);
        //     else console.log(e)
        // })

    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
run().catch(console.error);     