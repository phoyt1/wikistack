const express = require('express');
const routes = express.Router();

var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = routes;



routes.get('/',(req,res) =>{
  Page.findAll().then(data => res.render('index.html',{pages: data}));
});

routes.post('/',(req,res,next) =>{
  var page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
  });
  page.save().then(data => res.redirect(data.route)).catch(next);
});

routes.get('/add',(req,res) =>{
  res.render('addpage.html');
});

routes.get('/:url',(req,res)=>{
  Page.findOne({where: {urlTitle: req.params.url}}).then(data => res.render('wikipage.html',{Page: data}));
});
