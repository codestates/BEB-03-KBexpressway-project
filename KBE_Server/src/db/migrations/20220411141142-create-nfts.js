'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nfts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collections_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'collections',
          key: 'id',
        },
        onDelete: 'RESTRICT'
      },
      contract_address: {
        type: Sequelize.STRING
      },
      ipfs: {
        type: Sequelize.STRING
      },
      creater_account: {
        type: Sequelize.STRING
      },
      owner_account: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Nfts');
  }
};