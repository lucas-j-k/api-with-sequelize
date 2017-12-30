'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    town: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});

  Location.associate = function(models){
    Location.hasMany(models.Artwork, {as: 'artworks', foreignKey: 'locationId'})
  }

  return Location;
};