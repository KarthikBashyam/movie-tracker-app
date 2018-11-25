const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27001';
const dbName = 'moviedb';
const client = new MongoClient(url, {'useNewUrlParser':true});

let db;
let movieCollection;

client.connect((err) => {
	 db = client.db(dbName);
	 movieCollection = db.collection('movies');	 
});

exports.findAll = (req, res) => {
	movieCollection.find({}).toArray((err, docs) => {
		res.json(docs);	
	});	
}

exports.findByLang = (req,res) => {
	const lang = req.params.lang;
	movieCollection.find({"language":lang}).toArray((err, docs) => {
		res.json(docs);
	});
}

exports.findByStatus = (req,res) => {
	const status = req.params.status;
	movieCollection.find({"status":status}).toArray((err, result) => {
		res.json(result);
	});
}

exports.addMovie = (req, res) => {
	const movie = req.body;
	console.log(movie);

	movieCollection.insertOne(movie, (err, result) => {
		res.json(result);
	});
}

