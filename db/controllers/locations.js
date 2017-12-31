var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Location.findAll({
			include: [{
				model: models.Artwork,
				as: 'artworks'
			}]
		})
		.then(function(locations){
			res.status(200).json(locations);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Location.findById(req.params.id, {
			include: [{
				model: models.Artwork,
				as: 'artworks'
			}]
		})
		.then(function(location){
			res.status(200).json(location);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newLocation = models.Location.build();
		newLocation.name = req.sanitize('name').escape();
		newLocation.town = req.sanitize('town').escape();
		newLocation.country = req.sanitize('country').escape();
		newLocation.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Location.findById(req.params.id)
		.then(function(locationToUpdate){
			locationToUpdate.name = req.sanitize('name').escape();
			locationToUpdate.town = req.sanitize('town').escape();
			locationToUpdate.country = req.sanitize('country').escape();
			locationToUpdate.save()
			.then(function(locationToUpdate){
				res.status(200).json(locationToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Location.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedLocations){
			res.status(200).json(deletedLocations);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}

}
