const express = require("express");
const router = express.Router();
const market = require("../db").import("../models/market");
//

router.post("/add", (req, res) => {
  const addMarket = {
    marketName: req.body.marketName,
    address: req.body.address,
    size: req.body.size
  };
  market
    .create(addMarket)
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

router.delete("/:id", (req, res) => {
  market
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

router.put("/:id", (req, res) => {
  market
    .update(req.body, { where: { id: req.params.id } })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({ error: err }));
});

module.exports = router;
