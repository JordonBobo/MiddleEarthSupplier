module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    sell_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  });

  // an item cannot be created without an order
  Item.associate = (models) => {
    Item.belongsTo(models.Order, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // an item cannot be created without a product
  Item.associate = (models) => {
    Item.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Item;
};
