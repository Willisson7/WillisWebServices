const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Porter Willis');
});
const port = 3000;
app.listen(process.env.port || 3000);

console.log('Web server is listening at port ' + (process.env.port || port));