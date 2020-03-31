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

module.exports = sequelize;
