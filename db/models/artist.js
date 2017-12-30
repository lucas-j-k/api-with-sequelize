'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    born: DataTypes.INTEGER,
    died: DataTypes.INTEGER
  }, {});

  Artist.associate = function(models){
    Artist.hasMany(models.Artwork, {as: 'artworks', foreignKey: 'artistId'})
  }

  return Artist;
};