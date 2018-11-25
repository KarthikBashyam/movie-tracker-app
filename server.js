const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./service/movies');

let app = express()

app.set('PORT',4000);
app.use(bodyParser.json());

app.get('/movies', movies.findAll);
app.get('/movies/:lang', movies.findByLang);
app.post('/movies', movies.addMovie);

app.listen(app.get('PORT'), () => {
	console.log('Movie Tracker Service running on port :'+ app.get('PORT'));
})