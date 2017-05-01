const express = require('express');
const routes = express.Router();
module.export = routes;

routes.get('/',(req,res) =>{
  res.send('HOMEPAGE');
});

routes.post('/',(req,res) =>{
  res.send('HOMEPAGE');
});

routes.get('/add',(req,res) =>{
  res.render('addpage.html');
});
