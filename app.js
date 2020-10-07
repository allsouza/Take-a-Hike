const express = require("express");
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const lists = require('./routes/api/lists');
const trails = require('./routes/api/trails');
const reviews = require('./routes/api/reviews');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const db = require('./config/my_keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/lists', lists);
app.use('/api/reviews', reviews);
app.use('/api/trails', trails);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));