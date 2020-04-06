const express = require("express");
const router = express.Router();
const favorite = require("../db").import("../models/favorite");

//get favorite Route
router.get("/", (req, res) => {
  favorite
    .findAll({
      where: { userId: req.user.id },
    })
    .then((log) => res.status(200).json(log))
    .catch((err) =>
      res.json({
        error: err,
      })
    );
});

// add new favorite

router.post("/add", (req, res) => {
  const addFavorite = {
    boothName: req.body.boothName,
    boothId: req.body.boothId,
    userId: req.user.id,
  };
  favorite
    .create(addFavorite)
    .then((log) => res.status(200).json(log))
    .catch((err) =>
      res.json({
        error: err,
      })
    );
});

module.exports = router;
