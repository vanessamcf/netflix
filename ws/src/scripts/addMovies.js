const database = require('../services/database');

const Movie = require('../models/movie');
const moviesJSON = require('../data/movie.json');

const addMovies = async () => {
  try {
    for (let movie of moviesJSON) {
      console.log(`Inserindo ${movie.title}`);
      await new Movie(movie).save();
    }
    console.log('Final do script.');
  } catch (err) {
    console.log(err.message);
  }
};

addMovies();
