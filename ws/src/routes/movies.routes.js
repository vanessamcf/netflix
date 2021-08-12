const express = require('express');
const router = express.Router();
const _ = require('underscore');
const Movie = require('../models/movie');
const Season = require('../models/season');

//Recover Home screen
router.get('/home', async (req, res) => {
  try {
    //recovering all movies
    let movies = await Movie.find({});
    let finalMovies = [];

    //recovering all seasons
    for (let movie of movies) {
      const seasons = await Season.find({
        movie_id: movie._id,
      });
      const newMovie = {...movie._doc, seasons}; // copy all movies and creating new key called seasons
      finalMovies.push(newMovie);
    }
    //mix results randomly
    finalMovies = _.shuffle(finalMovies);

    //principal movie
    const principal = finalMovies[0]; // always catch the 1st

    //divide in sections
    //each 5 movies it create new array
    const sections = _.chunk(finalMovies, 5);

    res.json({error: false, principal, sections});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

// Recover all registers
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json({error: false, movies});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    res.json({error: false, movie});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

// create a register

router.post('/', async (req, res) => {
  try {
    const movie = req.body;
    const response = await new Movie(movie).save();
    res.json({error: false, movie: response});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const new_movie = req.body;
    const movie = await Movie.findByIdAndUpdate(id, new_movie);
    res.json({error: false, movie});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Movie.findByIdAndDelete(id);
    res.json({error: false});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

module.exports = router;
