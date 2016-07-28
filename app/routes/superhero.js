var mongoose = require('mongoose');
var Superhero = require('../models/superhero');

module.exports = function(){
	return{
		getAll: function(req, res){
			var query = Superhero.find({});
			query.exec(function(err, superheroes){
				if(err) res.send(err);
				res.json(superheroes);
			})
		},

		post: function(req, res){
			var newSuperhero = new Superhero(req.body);

			newSuperhero.save(function(err){
				if(err) res.send(err);
				res.json(req.body);
			});
		},

		getOne: function(req, res){
			Superhero.findById(req.params.id, function(err, superhero){
				if(err) res.send(err);
				res.json(superhero);
			})
		}
	}
};