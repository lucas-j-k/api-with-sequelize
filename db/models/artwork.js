'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artwork = sequelize.define('Artwork', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    movement: DataTypes.STRING,
    medium: DataTypes.STRING
  }, {});

  Artwork.associate = function(models){
  Artwork.belongsTo(models.Artist, { as : 'artist', foreignKey: 'artistId' });
  Artwork.belongsTo(models.Location, { as : 'location', foreignKey: 'locationId' });
} 

  return Artwork;
};