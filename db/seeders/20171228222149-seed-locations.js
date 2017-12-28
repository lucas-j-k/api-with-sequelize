'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Locations', [
      {
        name: "Musee d'Orsay",
        town: "Paris",
        country: 'France'
      },
      {
        name: "Museo Del Prado",
        town: "Madrid",
        country: "Spain"
      },
      {
        name: "MoMA",
        town: "New York",
        country: "United States"
      },
      {
        name: "Art Institute of Chicago",
        town: "Chicago",
        country: 'United States'
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
