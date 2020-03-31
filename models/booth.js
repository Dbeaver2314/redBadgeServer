module.exports = (sequelize, DataTypes) => {
  const Booth = sequelize.define("booth", {
    farmName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atMarket: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    likes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "-1"
    },
    markets: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Booth;
};
