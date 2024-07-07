const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/config.js');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const bookRoutes = require('./routes/book.js');
const userRoutes = require('./routes/user.js');
const morgan = require('morgan');

// Connexion à la BDD
connectDB();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
