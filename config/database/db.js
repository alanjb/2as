const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//async function connect to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        //remember to whitelist IPs
        console.log("MongoDB Connected...");
    }
    catch(err) {
        console.error('The error is: ' + err.message);
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;