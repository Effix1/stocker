const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
//const mongoose = require ('mongoose');
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet crée !',
  });
});

app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'r123',
      title: 'mon premier objet',
      description: 'les infios d emon premier objet',
      imageUrl: '',
      price: 4000,
      userId: 'gsomidsffsf',
    },
    {
      _id: 'r124r',
      title: 'mon deuxieme objet',
      description: 'les infios d emon deuxieme objet',
      imageUrl: '',
      price: 4000,
      userId: 'gsomidsffsf',
    },
    {
      _id: 'r125',
      title: 'mon troisieme objet',
      description: 'les infios d emon troisieme objet',
      imageUrl: '',
      price: 3500,
      userId: 'gsomidsffsf',
    },
  ];
  res.status(200).json(stuff);
});
module.exports = app;
