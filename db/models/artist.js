'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    born: DataTypes.INTEGER,
    died: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Artist;
};