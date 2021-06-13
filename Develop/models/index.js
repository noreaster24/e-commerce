// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'id'
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'id'
});

// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tags, {
  through: ProductTag,
  as: '',
  foreignKey: 'id'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: ProductTag,
  as: '',
  foreignKey: 'id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
