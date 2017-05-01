const express = require('express');
const routes = express.Router();
const userRoute = require('./user.js');
const wikiRoute = require('./wiki.js');
module.export = routes;

routes.use('/wiki', wikiRoute);
routes.use('/user', userRoute);
