const express = require('express');
const router = express.Router();
const Episode = require('../models/episode');

router.get('/season/:season', async (req, res) => {
  try {
    const season_id = req.params.season;
    const episodes = await Episode.find({
      season_id,
    });
    res.json({error: false, episodes});
  } catch (err) {
    res.json({error: true, message: err.message});
  }
});

module.exports = router;