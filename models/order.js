module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    shippingName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    shippingItems: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },    
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  });

  // an order cannot be created without a customer
  // Order.associate = (models) => {
  //   Order.belongsTo(models.Customer, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  // one order can have many products through items
  // Order.associate = (models) => {
  //   Order.hasMany(models.Item, {
  //     // when an order is deleted, delete any associated items
  //     onDelete: 'cascade',
  //   });
  // };

  return Order;
};
