module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    img_filename: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    list_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  });

  // // one product can have many orders through items
  // Product.associate = (models) => {
  //   Product.hasMany(models.Item, {
  //     // when a product is deleted, delete any associated items
  //     onDelete: 'cascade',
  //   });
  // };

  return Product;
};
