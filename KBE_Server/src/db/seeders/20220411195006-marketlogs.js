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
     await queryInterface.bulkInsert('MarketLogs',
     [
       {
        id: 1,
        nft_id: 1,
        seller_account: '0x08A46De58d48920448D4e909020FE1560f0c411A',
        sale_price: 1,
        sale_token: "WETH",
        status_code: 1,
        buyer_account: null,
        transaction_hash: null,
        transactedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 2,
        nft_id: 1,
        seller_account: '0x0000000000000000000000000000000000000000',
        sale_price: 0.3,
        sale_token: "WETH",
        status_code: 2,
        buyer_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        transaction_hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        transactedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nft_id: 2,
        seller_account: '0x08A46De58d48920448D4e909020FE1560f0c411A',
        sale_price: 5,
        sale_token: "WETH",
        status_code: 0,
        buyer_account: null,
        transaction_hash: null,
        transactedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nft_id: 3,
        seller_account: '0x0000000000000000000000000000000000000000',
        sale_price: 0.1,
        sale_token: "WETH",
        status_code: 3,
        buyer_account: null,
        transaction_hash: null,
        transactedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nft_id: 4,
        seller_account: '0x0000000000000000000000000000000000000000',
        sale_price: 0.1,
        sale_token: "WETH",
        status_code: 4,
        buyer_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        transaction_hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        transactedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        nft_id: 5,
        seller_account: '0x0000000000000000000000000000000000000000',
        sale_price: 0,
        sale_token: "WETH",
        status_code: 5,
        buyer_account: "0x08A46De58d48920448D4e909020FE1560f0c411A",
        transaction_hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        transactedAt: new Date(),
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
     await queryInterface.bulkDelete('MarketLogs', null, {});
  }
};
