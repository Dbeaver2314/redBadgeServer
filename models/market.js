module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define("market", {
    marketName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "1"
    }
  });

  return Market;
};
