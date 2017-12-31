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
	},

	create(req, res){
		var newArtwork = models.Artwork.build();
		newArtwork.title = req.sanitize('title').escape();
		newArtwork.year = req.sanitize('year').escape();
		newArtwork.movement = req.sanitize('movement').escape();
		newArtwork.medium = req.sanitize('medium').escape();
		newArtwork.artistId = req.sanitize('artistId').escape();
		newArtwork.locationId = req.sanitize('locationId').escape();
		newArtwork.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Artwork.findById(req.params.id)
		.then(function(artworkToUpdate){
			artworkToUpdate.title = req.sanitize('title').escape();
			artworkToUpdate.year = req.sanitize('year').escape();
			artworkToUpdate.movement = req.sanitize('movement').escape();
			artworkToUpdate.medium = req.sanitize('medium').escape();
			artworkToUpdate.artistId = req.sanitize('artistId').escape();
			artworkToUpdate.locationId = req.sanitize('locationId').escape();
			artworkToUpdate.save()
			.then(function(artworkToUpdate){
				res.status(200).json(artworkToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Artwork.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedArtworks){
			res.status(200).json(deletedArtworks);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
