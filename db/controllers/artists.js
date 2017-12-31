var models = require('../models');

module.exports = {
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
		models.Artist.findById(req.params.id, {
			include: [{
				model: models.Artwork,
				as: 'artworks'
			}]
		})
		.then(function(artist){
			res.status(200).json(artist);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newArtist = models.Artist.build();
		newArtist.firstName = req.sanitize('firstName').escape();
		newArtist.lastName = req.sanitize('lastName').escape();
		newArtist.nationality = req.sanitize('nationality').escape();
		newArtist.born = req.sanitize('born').escape();
		newArtist.died = req.sanitize('died').escape();
		console.log(newArtist);
		newArtist.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Artist.findById(req.params.id)
		.then(function(artistToUpdate){
			artistToUpdate.firstName = req.sanitize('firstName').escape();
			artistToUpdate.lastName = req.sanitize('lastName').escape();
			artistToUpdate.nationality = req.sanitize('nationality').escape();
			artistToUpdate.born = req.sanitize('born').escape();
			artistToUpdate.died = req.sanitize('died').escape();
			artistToUpdate.save()
			.then(function(updatedArtist){
				res.status(200).json(updatedArtist);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Artist.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedArtists){
			res.status(200).json(deletedArtist);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
