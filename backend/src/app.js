const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection.js");
var bodyParser = require('body-parser');
const router = require('./router/router.js');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin:'http://localhost:4200' }));

app.use("/api",router);
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})