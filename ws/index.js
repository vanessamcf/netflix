const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const movieRoutes = require('./src/routes/movies.routes');
const userRoutes = require('./src/routes/users.routes');
const episodesRoutes = require('./src/routes/episodes.routes');

//Middlewares (interceptar codigo)
app.use(bodyParser.json());
app.use(cors()); // cors é um controle de acesso
app.use(morgan('dev'));

// Routes
app.use('/', movieRoutes);
app.use('/user', userRoutes);
app.use('/episode', episodesRoutes);

app.listen(8000, () => {
  console.log('My server is working');
});

// cd ws
// yarn start
// start video 3
//terminal run   brew services start mongodb-community@5.0
//encerrar brew services stop mongodb-community@5.0
