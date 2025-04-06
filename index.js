const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const port = 3010;

app.use(express.json());

app.use(express.static('static'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
