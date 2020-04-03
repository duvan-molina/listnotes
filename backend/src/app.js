const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// midlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/profiles', require('./routes/profile'));
module.exports = app;