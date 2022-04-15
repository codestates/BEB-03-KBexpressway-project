'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarketLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Nfts, {
        as: 'nfts',
        foreignKey: 'nftId',
        onDelete: 'RESTRICT'
      })

    }
  }
  MarketLogs.init({
    nftId:{
      field: 'nft_id',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sale_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sale_token: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ETH'
    },
    status_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyer_account: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nft_transaction_hash: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    payment_transaction_hash: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    transactedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'MarketLogs',
  });
  return MarketLogs;
};