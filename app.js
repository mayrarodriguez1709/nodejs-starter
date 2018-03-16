'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

const authRoutes = require('./server/api/auth/routes/auth.routes');
const userRoutes = require('./server/api/user/routes/user.routes');

app.use('/api', authRoutes);
app.use('/api', userRoutes);

module.exports = app;