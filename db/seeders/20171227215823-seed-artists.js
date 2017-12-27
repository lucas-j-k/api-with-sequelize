'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Artists', [
        {
          firstName: "Vincent",
          lastName: "Van Gogh",
          nationality: "Netherlands",
          born: 1853,
          died: 1890
        },
        {
          firstName: "Edward",
          lastName: "Hopper",
          nationality: "United States of America",
          born: 1882,
          died: 1967
        },
        {
          firstName: "James Mcneill",
          lastName: "Whistler",
          nationality: "United States of America",
          born: 1834,
          died: 1903
        },
        {
          firstName: "Diego",
          lastName: "Velazquez",
          nationality: "Spain",
          born: 1599,
          died: 1660
        },
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
