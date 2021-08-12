const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  title: String,
  type: String,
  cover: String,
  logo: String,
  logoMobile: String,
  thumbnail: String,
  description: String,
  genres: Array,
  cast: Array,
  scenes_moments: Array,
});

module.exports = Movie;
