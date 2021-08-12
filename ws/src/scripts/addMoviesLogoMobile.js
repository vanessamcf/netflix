const database = require('../services/database');
const Movie = require('../models/movie');
const moviesLogoMobileJSON = require('../data/moviesLogoMobile.json');

const addUsers = async () => {
  try {
    for (let moviesLogoMobile of moviesLogoMobileJSON) {
      await Movie.findByIdAndUpdate(moviesLogoMobile.movie_id, {
        logoMobile: moviesLogoMobile.logoMobile,
      });
    }
    console.log('Final do Script');
  } catch (err) {
    console.log(err.message);
  }
};
addUsers();
