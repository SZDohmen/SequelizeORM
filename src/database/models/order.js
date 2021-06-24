'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo -- OneToOne
      Order.belongsTo(models.Payment);
      Order.belongsTo(models.State);

      // hasOne -- OneToOne
      Order.hasOne(models.Shipping, {
        foreignKey: 'orderId',
        as: 'shippings'
      });

      // hasMany -- OneToMany
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'orderId',
        as: 'order-details'
      });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};