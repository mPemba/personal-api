var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

var port = 8666;

app.listen(port);

app.use(bodyParser.json());

var user = {
	name: 'Pemba',
	location: 'Nepal',
	hobbies: ['music', 'magic'],
	occupations: ['webDev', 'musician'],
	mentions: ['https://www.youtube.com/user/PleaseEnjoyTheSpins'],
	references: ['J-Young', 'JK-Smith', 'Moondog', 'J-Jansen']
};

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS GET POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Control-Type, Accept');
	next();
})

app.get('/name', function(req, res) {
	res.status(200).json(user.name);
})

app.get('/location', function(req, res) {
	res.status(200).json(user.location);
})

app.put('/location', function(req, res) {

})

app.get('/hobbies', function(req, res) {
	if (req.query.reverse === 'desc') {
		res.status(200).json(hobbies.reverse());
	} else if (req.query.alpaOrder === 'asc') {
		res.status(200).json(hobbies.sort());
	}
})

app.get('/occupations', function(req, res) {
	if (req.query.reverse === 'desc') {
		res.status(200).json(occupations.reverse());
	} else if (req.query.alpaOrder === 'asc') {
		res.status(200).json(occupations.sort());
	}
})

app.get('/occupations/latest', function(req, res) {
	res.status(200).json(latestOccupation);
})

app.get('/mentions', function(req, res) {
	res.status(200).json(user.mentions);
})

app.post('/mentions', function(req, res) {
	console.log(req.body);
	res.json({message: 'keep it simple stupid'});
})

app.get('/references', function(req, res) {
	res.status(200).json(user.references);
})

app.post('/references', function(req, res) {
	res.json({message: 'wooooooo'});
})

