const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userinfo').then(() => {
    console.log("connection successfully");
}).catch((e) => {
    console.log("connection error", e);
})