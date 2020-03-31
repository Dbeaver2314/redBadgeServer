module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userType: {
      type: DataTypes.ENUM("User", "Vendor", "Admin"),
      allowNull: false
    }
  });

  return User;
};
