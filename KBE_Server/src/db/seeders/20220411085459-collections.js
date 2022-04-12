'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Collections', [
      {
        id: 1,
        contract_address: '0x0000000000000000000000000000000000000000',
        name: "collection1",
        description: "Friendly OpenSea Creature that enjoys long swims in the ocean.",
        image: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/60.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        contract_address: '0x0000000000000000000000000000000000000000',
        name: "collection2",
        description: "Friendly OpenSea Creature that enjoys long swims in the ocean.",
        image: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/61.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        contract_address: '0x0000000000000000000000000000000000000000',
        name: "collection3",
        description: "Friendly OpenSea Creature that enjoys long swims in the ocean.",
        image: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/62.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Collections', null, {});
  }
};
