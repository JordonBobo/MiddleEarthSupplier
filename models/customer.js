module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // could get email from user log in
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  });

  // one customer can have many orders
  Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      // when a customer is deleted, delete any associated orders
      onDelete: 'cascade',
    });
  };

  return Customer;
};
