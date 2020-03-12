'use strict';

const http = require('http');
const express = require('express');

const config = require('./config/env');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/static_global'));

app.get('/', (req, res) => {
	res.render('index');
});
app.get('/assignment', (req, res) => {
	res.render('assignment');
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.listen(config.NODE_APP_PORT, () => {
	console.log(`${config.APP_NAME} App listening on port ${config.NODE_APP_PORT}`);
});
