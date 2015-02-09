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
	references: ['J-Young', 'JK-Smith', 'Moondog', 'J-Jansen'],
	skills: [
	  {
	  	id: 1,
	  	name: 'Song Writing',
	  	experience: 'intermediate'
	  },
	  {
	  	id: 2,
	  	name: 'HTML/CSS',
	  	experience: 'intermediate'
	  },
	  {
	  	id: 3,
	  	name: 'Music Production', 
	  	experience: 'intermediate'
	  },
	  {
	  	id: 4,
	  	name: 'Javascript',
	  	experience: 'beginner'
	  }
	]
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
    console.log(req.body);
    if (req.body) {
    	me.location = req.body.location;
    	console.log('New Location is: ');
    	console.log(user.location);
    	res.status(200).json(user.location);
    } else {
    	res.status(400).send('no sir');
    }
})

app.get('/hobbies', function(req, res) {
	if (req.query.reverse === 'desc') {
		res.status(200).json(user.hobbies.reverse());
	} else if (req.query.alpaOrder === 'asc') {
		res.status(200).json(user.hobbies.sort());
	} else {
		res.status(200).json(user.hobbies);
	}
})

app.get('/occupations', function(req, res) {
	if (req.query.reverse === 'desc') {
		res.status(200).json(user.occupations.reverse());
	} else if (req.query.alpaOrder === 'asc') {
		res.status(200).json(user.occupations.sort());
	} else {
		res.status(200).json(user.occupations);
	}
})

app.get('/occupations/latest', function(req, res) {
	res.status(200).json(user.latestOccupation);
})

app.get('/mentions', function(req, res) {
	res.status(200).json(user.mentions);
})

app.post('/mentions', function(req, res) {
	if (req.body) {
		console.log('post to mentions: ' + req.body.mention);
		user.mentions.push(req.body.mentions);
		res.status(200).json(user.mentions);
	} else {
		res.status(400).send('bad bad');
	}
})

app.get('/references', function(req, res) {
	res.status(200).json(user.references);
})

app.post('/references', function(req, res) {
	if (req.body) {
		console.log('post to references: ' + req.body);
		user.references.push(req.body);
		res.status(200).json(user.references);
	} else {
		res.status(400).send('bad bad');
	}
})

app.get('/skills', function(req, res) {
	if (req.query.experience) {
		var skillSet = [];
		for (var i = 0; i < user.skills.length; i++) {
			if (user.skills[i].experience === req.query.experience) {
				skillSet.push(user.skills[i]);
				res.status(200).json(user.skillSet);
			} else {
				res.status(200).json(user.skills);
			}
		}
		res.status(200).json(user.skills);
	}
})

app.post('/skills', function(req, res) {
	if (req.body) {
		console.log('post to skills: ' + req.body);
		user.skills.push(req.body);
		res.status(200).json(user.skills);
	} else {
		res.status(400).send('bad bad');
	}
}) 



