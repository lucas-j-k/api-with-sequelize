'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artwork = sequelize.define('Artwork', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    movement: DataTypes.STRING,
    medium: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Artwork;
};