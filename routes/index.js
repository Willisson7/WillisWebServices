// const routes = require('express').Router();
// const lesson1Cont = require('../controllers/lesson1');
const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

// router.get('/', (lesson1Cont.briRoute));
// router.get('/kinsley', (lesson1Cont.kinsleyRoute));
// router.get('/porter', (lesson1Cont.porterRoute));
// router.get('/oli', (lesson1Cont.oliRoute));

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/contacts', require('./contacts'));

module.exports = router;
