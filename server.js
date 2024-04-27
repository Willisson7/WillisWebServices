const express = require("express");
const app = express();
const router = require('./routes/index')

const port = 3000;

app.use('/', require('./routes'));


app.listen(process.env.port || 3000);

console.log('Web server is listening at port ' + (process.env.port || port));