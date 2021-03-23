module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    ship_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pay_method: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  // an order cannot be created without a customer
  Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // one order can have many products through items
  Order.associate = (models) => {
    Order.hasMany(models.Item, {
      // when an order is deleted, delete any associated items
      onDelete: 'cascade',
    });
  };

  return Order;
};
