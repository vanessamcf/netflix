const database = require('../services/database');

const Movie = require('../models/movie');
const Season = require('../models/season');
const Episode = require('../models/episode');

const addSeasons_Episodes = async () => {
  try {
    const series = await Movie.find({type: 'serie'}).select('_id');
    for (let serie of series) {
      console.log(`MOVIE ${serie}-----`);
      const seasonNumbers = Math.floor(Math.random() * 5) + 1;
      for (let i = 1; i <= seasonNumbers; i++) {
        // se for menor ou igual numero de temporadas continuar adicionando ate chegar a 5
        console.log(`Inserindo temporada ${i} de ${seasonNumbers}`);
        const season = await new Season({
          movie_id: serie,
          title: `Temporada ${i}`,
        }).save();
        const episodesNumbers = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= episodesNumbers; x++) {
          console.log(`Inserindo episódio ${x} de ${episodesNumbers}`);
          await new Episode({
            season_id: season._id,
            title: `Episodío ${x}`,
            number: x,
            description:
              'Loren Ipsum is simply dumy text that help you to copy and paste in a project that you need a text. You can choose the number of paragraphs as well.',
            cover: 'https://picsum.photos/300/200',
          }).save();
        }
      }
    }
    console.log('FINAL DO SCRIPT!');
  } catch (err) {
    console.log(err.message);
  }
};

addSeasons_Episodes();
