const express = require('express');
const mongoose = require('mongoose'); // ORM to interact with MongoDB
const bodyParser = require('body-parser'); // Allows us to get data from the body when we send post requests


const items = require('./routes/api/items')



const app = express();

app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);


  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));
