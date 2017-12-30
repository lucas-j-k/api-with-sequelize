var models = require('../models');

module.exports = {
	//List all authors
	fetchAll(req, res){
		models.Location.findAll()
		.then(function(locations){
			res.status(200).json(locations);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Location.findById(req.params.id)
		.then(function(location){
			res.status(200).json(location);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
