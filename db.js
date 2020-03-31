const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.NAME,
  "postgres",
  process.env.PASS,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(() => console.log("database is connected"))
  .catch(err => console.log(err));

user = sequelize.import("./models/user");
favorite = sequelize.import("./models/favorite");
booth = sequelize.import("./models/booth");
market = sequelize.import("./models/market");

favorite.belongsTo(user);
user.hasMany(favorite);

booth.belongsTo(market);
market.hasMany(booth);
booth.belongsTo(user);
user.hasMany(booth);

module.exports = sequelize;
