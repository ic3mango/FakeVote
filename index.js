const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// import environmental variables from variables.env file
require('dotenv').config({ path: 'variables.env' });

// mongoose models
require('./models/User');
require('./models/Poll');

//services e.g. passport
require('./services/passport');

// Connect to our database and handle a bad connections
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🚫 ❗️🚫 ❗️🚫 ❗️🚫 ❗️ ⃗  ${err.message}`);
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/pollRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets to the client
  app.use(express.static('client/build'));

  // Express will serve up index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
