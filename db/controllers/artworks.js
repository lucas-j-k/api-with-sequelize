var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Artwork.findAll()
		.then(function(artworks){
			res.status(200).json(artworks);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Artwork.findById(req.params.id)
		.then(function(artwork){
			res.status(200).json(artwork);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
