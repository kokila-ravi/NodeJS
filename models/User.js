const mongoose = require("mongoose");


// Schema
const sch = {
    name: String,
    email: String,
    id: Number
};

const monmodel = mongoose.model("NEWCOL", sch);

module.exports = User;
