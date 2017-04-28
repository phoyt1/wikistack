'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
/** Rendering View **/
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });

/** URL and JSON parser **/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
