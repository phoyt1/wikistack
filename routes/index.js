const express = require('express');
const routes = express.Router();
const userRoute = require('./user.js');
const wikiRoute = require('./wiki.js');
module.exports = routes;

routes.use('/wiki', wikiRoute);
routes.use('/user', userRoute);
