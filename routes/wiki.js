const express = require('express');
const routes = express.Router();

var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = routes;


routes.get('/',(req,res) =>{
  res.redirect('/');
});

routes.post('/',(req,res) =>{
  var page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
  });
  page.save().then(res.redirect('/'));
});

routes.get('/add',(req,res) =>{
  res.render('addpage.html');
});

