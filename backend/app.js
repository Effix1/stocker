const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Thing = require('./models/thing.js')

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

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
  .then(()=> res.status(201).json({message : 'Objet en registrée'}))
  .catch(error => res.status(400).json({error}))
});

app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => {
      if (thing) {
        res.status(200).json(thing);
      } else {
        res.status(404).json({ error: 'Thing not found' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.put('/api/stuff/:id',(req,res,next)=>{
  Thing.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
  .then(() => res.status(200).json({ message:'objet modifié ! '}))
  .catch(error => res.status(400).json({error}))
});

app.delete('/api/stuff/:id' ,( req, res, next)=>{
  Thing.deleteOne({_id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet suprimé ! '}))
  .catch(error => res.status(400).json({ error }))
});


app.use('/api/stuff', (req, res, next) => {
  Thing.find()
  .then(things => res.status(200).json(things ))
  .catch(error => res.status(400).json({ error }));
});
module.exports = app;
