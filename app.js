require("dotenv").config();

const express = require("express");
const app = express();

const sequelize = require("./db");

sequelize.sync({ force: true }); //to drop tables use { force: true}
app.use(express.json());

//Middleware import
app.use(require("./middleware/headers"));

//controllers
const user = require("./controllers/usercontroller");
const booth = require("./controllers/boothcontroller");
const market = require("./controllers/marketcontroller");
const favorite = require("./controllers/favoritecontroller");

//Routes

app.use("/auth", user);
app.use("/market", market);
app.use(require("./middleware/validate-session"));
app.use("/booth", booth);
app.use("/market", market);
app.use("/favorite", favorite);

app.listen(process.env.PORT, () =>
  console.log(`app is still listening on ${process.env.PORT}`)
);
