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
    await queryInterface.bulkInsert('Nfts',
    [
      {
        id: 1,
        collections_id: 1,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        collections_id: 2,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/51.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        collections_id: 3,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/52.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        collections_id: 1,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/53.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        collections_id: 2,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/54.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        collections_id: 3,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/55.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        collections_id: 1,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/56.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        collections_id: 2,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/57.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        collections_id: 2,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/58.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        collections_id: 1,
        ipfs: "https://storage.googleapis.com/opensea-prod.appspot.com/creature/59.png",
        creater_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        owner_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
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
    await queryInterface.bulkDelete('Nfts', null, {});
  }
};
