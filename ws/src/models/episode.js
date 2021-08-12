const mongoose = require('mongoose');

const Episode = mongoose.model('Episode', {
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: 'season',
  },
  title: String,
  description: String,
  number: Number,
  cover: String,
});

module.exports = Episode;