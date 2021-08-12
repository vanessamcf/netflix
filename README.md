# Netflix app - Clone

## How to access

1- Clone this repository: https://github.com/vanessamcf/netflix.git

2- Download and Install **MongoDB Compass**

**Terminal 1:**

3- Open on the Terminal e.g.: `cd Downloads/netflix`

4- Install dependencies: `npm install`


**Terminal 2:**

5- Open another Terminal e.g.: `cd Downloads/netflix/ws`

6- Install dependencies: `npm install`

7- Run `yarn start`

**Terminal 3:** Connect to DB

8- Open another Terminal e.g.: `cd Downloads/netflix/ws`

9- Run `brew services start mongodb-community@5.0`

-----------------------------------------------------

10- Open MongoDB Compass 

11- Below New Connection click on **Connect**

> It will connect to localhost:27017

Back in the **Terminal 2**:

> You should be in the `ws` folder

> You will add the database to run the scripts

12- `Ctrl C` (to stop application)

13- Run `node src/scripts/addUsers.js`

14- Run `node src/scripts/addMovies.js`

15- Run `node src/scripts/addSeasons_Episodes.js`

16- Run `node src/scripts/addMoviesLogoMobile.js`

17- Run `yarn start`

> All data will be now on MongoDB Compass


Back in the **Terminal 1**:

18- Run `react-native run-ios`

![Netlifx app](/netflix_clone_app.gif)

**Stop application**:

17- Close Terminal 1

18- Terminal 2: `Ctrl C` to close it

19- Terminal 3 run `brew services stop mongodb-community@5.0`



## Tutorial:

- **React Native**:https://www.youtube.com/watch?v=PSOmihuvMH8&list=PL_Axpn7FrXHSt92vK3EthJCId4mUn7viv
- **NodeJS**: https://www.youtube.com/watch?v=1VpmPJ-dWsE&list=PL_Axpn7FrXHRxxq7fvNwW-Tjx_I8_7Omx
