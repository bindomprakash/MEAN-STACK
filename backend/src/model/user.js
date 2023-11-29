const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});
const userModel = mongoose.model("userdetail", userSchema);
module.exports = userModel;