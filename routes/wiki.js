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
  var user = {
    name: req.body.author,
    email: req.body.authorEmail
  };
  User
  .findOrCreate({
    where: {name: req.body.author, email: req.body.authorEmail},
    defaults: user
  })
  .then(userData => {
    console.log(userData);
    var page = Page.build({
      title: req.body.title,
      content: req.body.pageContent,
      authorId: userData[0].dataValues.id
    });
    page.save().then(data => res.redirect(data.route)).catch(next);
  });
});

routes.get('/add',(req,res) =>{
  res.render('addpage.html');
});

routes.get('/:url',(req,res)=>{
  Page.findOne({where: {urlTitle: req.params.url}}).then(data => res.render('wikipage.html',{Page: data}));
});
