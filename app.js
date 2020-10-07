const express = require("express");
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const lists = require('./routes/api/lists');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/public'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
  })
}

const app = express();
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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));