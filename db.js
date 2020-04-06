const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("database is connected"))
  .catch((err) => console.log(err));

user = sequelize.import("./models/user");
favorite = sequelize.import("./models/favorite");
booth = sequelize.import("./models/booth");
market = sequelize.import("./models/market");

favorite.belongsTo(user);
user.hasMany(favorite);
favorite.belongsTo(booth, { foreignKey: "boothId" });
booth.hasMany(favorite, { foreignKey: "boothId" });

booth.belongsTo(market);
market.hasMany(booth);
booth.belongsTo(user);
user.hasMany(booth);

module.exports = sequelize;
