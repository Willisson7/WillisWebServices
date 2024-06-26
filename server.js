const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
const mongodb = require('./db/connect');

const port = process.env.port || 8080;
const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-requested-with, Content-Type, Accept, Z-key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);

    console.log(`Connected to DB and listening on port ${port}`);
  }
});
