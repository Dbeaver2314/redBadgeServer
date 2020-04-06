module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define("favorite", {
    boothName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boothId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Favorite;
};
