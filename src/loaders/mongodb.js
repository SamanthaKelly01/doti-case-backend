const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://samanthak2002:3IlMVrOnltLCSdX6@pontodoti.o6h56fs.mongodb.net/')
}

module.exports = startDB;