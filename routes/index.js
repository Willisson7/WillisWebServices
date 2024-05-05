// const routes = require('express').Router();
// const lesson1Cont = require('../controllers/lesson1');
const express = require('express');
const router = express.Router();

// router.get('/', (lesson1Cont.briRoute));
// router.get('/kinsley', (lesson1Cont.kinsleyRoute));
// router.get('/porter', (lesson1Cont.porterRoute));
// router.get('/oli', (lesson1Cont.oliRoute));

router.use('/contacts', require('./contacts'));

module.exports = router;