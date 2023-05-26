const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://teste:pWCpcOxfA8L9KMg0@pontodoti.o6h56fs.mongodb.net/?retryWrites=true&w=majority')
}
//pWCpcOxfA8L9KMg0
module.exports = startDB;