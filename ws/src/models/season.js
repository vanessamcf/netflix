const mongoose = require('mongoose');

const Season = mongoose.model('Season', {
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Movie',
  },
  title: String,
});

module.exports = Season;
