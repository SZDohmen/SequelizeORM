'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // hasOne -- OneToOne
      Address.hasOne(models.User, { 
        foreignKey: 'userId',
        targetKey: 'addressId'
      });
    }
  };
  Address.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};