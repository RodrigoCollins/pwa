// Routes.js - Módulo de rutas

const express = require('express');
var router = express.Router();
const push = require('./push')



router.post('/subscribe', (req, res) => {

  const suscripcion = req.body;

  push.addSubscription(suscripcion); 


})

router.get('/key', (req, res) => {

    const key = push.getKey()

    res.send(key)

})

router.post('/push', (req, res) => {

  const post = {
    titulo: req.body.titulo,
    cuerpo: req.body.cuerpo,
    usuario: req.body.usuario
  }
   
  push.sendPush(post);

  res.json(post)

})

module.exports = router;