'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Product.hasMany(models.Brand, {
        foreignKey: 'brandId'
      });

      // belongsTo -- ManyToOne     
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Gender);
      Product.belongsTo(models.Size);

      // hasMany -- OneToMany
      Product.hasMany(models.Image, {
        foreignKey: 'productId',
        as: 'images'
      });

      // hasOne -- OneToOne
      Product.hasOne(models.OrderDetail, {
        foreignKey: 'productId',
        as: 'order-details'
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stockMin: DataTypes.INTEGER,
    stockMax: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};