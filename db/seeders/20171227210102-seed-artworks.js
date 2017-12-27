'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Artworks', [
      {
        title: "Whistler's Mother",
        year: 1871,
        movement: 'Realism',
        medium: 'Oil Paint'
      },
      {
        title: 'The Starry Night',
        year: 1889,
        movement: 'Post Impressionism',
        medium: 'Oil Paint'
      },
      {
        title: 'Las Meninas',
        year: 1656,
        movement: 'Baroque',
        medium: 'Oil Paint'
      },
      {
        title: 'Nighthawks',
        year: 1942,
        movement: 'Modernism',
        medium: 'Oil Paint'
      }

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
