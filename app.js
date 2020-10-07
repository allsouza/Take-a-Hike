const express = require("express");
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const lists = require('./routes/api/lists');
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./config/my_keys').mongoURI;
// const fileUpload = require('express-fileupload');
// const upload = require('./routes/api/upload');
const cors = require("cors");
const fileUploadRoutes = require('./routes/api/fileUploadRoutes')

const app = express();

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
// app.use('/api/upload', upload);
app.use('/api/photo', fileUploadRoutes);

app.use(cors());

// app.use(fileUpload({
//   createParentPath: true
// }));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));