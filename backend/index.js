const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-express-cinema', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors({
    origin:["http://localhost:3000"]
}))

app.use(bodyParser.json())

app.use("/", require("./routes.js"))

// app.use('/', require('./routes'))


app.listen(process.env.PORT || 5000)

module.exports = app;