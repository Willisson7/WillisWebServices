const routes = require('express').Router();
const lesson1Cont = require('../controllers/lesson1');

routes.get('/', (lesson1Cont.briRoute));
routes.get('/kinsley', (lesson1Cont.kinsleyRoute));
routes.get('/porter', (lesson1Cont.porterRoute));
routes.get('/oli', (lesson1Cont.oliRoute));

module.exports = routes;