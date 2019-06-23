const express = require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Cabeceras
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header('Access-Control-Allow-Request-Method', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  //rutas
  require('./server/routes/usuarios')(app);
  app.get('*', (req,res)=>{
        res.status(200).send({message:"Hola chicos Node.js"});
  })

  module.exports = app;