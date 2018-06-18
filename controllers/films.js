const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');

const express = require('express');
var filmsRouter = new express.Router();


filmsRouter.get('/:id', function(req,res){
  res.send({data: films[req.params.id]});
})

filmsRouter.get('/', function(req, res){
  res.json({data: films});
})

// filmsRouter.post('/', function(req, res){
//   films.push(req.body.film);
//   res.json({data: films});
// })

filmsRouter.post('/', (req, res) => {
const newFilm = new Film(req.body);
films.push(newFilm);
res.json({data: films});
});

// filmsRouter.put('/:id', function(req, res){
//   films[req.params.id] = req.body.film;
//   res.json({data: films});
// })

filmsRouter.put('/:id', function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
})

filmsRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})

module.exports = filmsRouter;