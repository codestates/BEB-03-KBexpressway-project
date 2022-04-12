'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MarketLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nft_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'nfts',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        allowNull: false
      },
      seller_account: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sale_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sale_token: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'WETH'
      },
      status_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      buyer_account: {
        type: Sequelize.STRING,
        allowNull: true
      },
      transaction_hash: {
        type: Sequelize.STRING,
        allowNull: true
      },
      transactedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MarketLogs');
  }
};