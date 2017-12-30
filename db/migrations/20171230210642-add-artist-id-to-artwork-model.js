'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'artworks',
      'artistId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "artworks",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'artworks',
        'artistId'
      )
  }
};
