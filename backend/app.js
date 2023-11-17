const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Objet = require('./models/Objet')

mongoose.connect('mongodb+srv://Effix1st:Eloise2015@cluster0.oljcbaq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

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
  delete req.body._id;
  const objet = new Objet({
    ...req.body
  });
  objet.save()
  .then(()=> res.status(201).json({message : 'Objet en registrée'}))
  .catch(error => res.status(400).json({error}))
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
