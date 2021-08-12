const database = require('../services/database');

const Users = require('../models/user');
const usersJSON = require('../data/user.json');

const addUsers = async () => {
  try {
    for (let user of usersJSON) {
      console.log(`Inserindo ${user.name}`);
      await new Users(user).save();
    }
    console.log('Final do script.');
  } catch (err) {
    console.log(err.message);
  }
};

addUsers();
