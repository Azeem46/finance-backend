// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loanRoutes = require('./routes/loan');

const app = express();
app.use(bodyParser.json());

app.use('/api', loanRoutes);

mongoose.connect('mongodb+srv://shaikhazeem4646:azeem464693@cluster0.oftz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
