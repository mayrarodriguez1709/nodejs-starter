'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiBaseUrl = '/api';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

const authRoutes = require('./server/api/auth/routes/auth.routes');
const userRoutes = require('./server/api/user/routes/user.routes');
const roleRoutes = require('./server/api/role/routes/role.routes');


app.use(apiBaseUrl, authRoutes);
app.use(apiBaseUrl, userRoutes);
app.use(apiBaseUrl, roleRoutes);

module.exports = app;
