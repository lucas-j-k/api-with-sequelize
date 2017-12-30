var models = require('../models');

module.exports = {
	//List all authors
	fetchAll(req, res){
		models.Artist.findAll({
			include: [{
				model: models.Artwork,
				as: 'artworks'
			}]
		})
		.then(function(artists){
			res.status(200).json(artists);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Artist.findById(req.params.id)
		.then(function(artist){
			res.status(200).json(artist);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
