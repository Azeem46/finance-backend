// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loanRoutes = require('./routes/loan');

const app = express();
app.use(bodyParser.json());

app.use('/api', loanRoutes);

mongoose.connect('mongodb+srv://shaikhazeem4646:azeem464693@cluster0.oftz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});