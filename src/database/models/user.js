'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // hasMany -- OneToMany
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders'
      });

      // belongsTo -- OneToOne
      User.belongsTo(models.Address);

      // belongsToMany -- ManyToMany
      User.belongsToMany(models.Rol, {
        foreignKey: 'userId',
        as: 'users_has_rols'
      });
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};