const express = require("express");
const router = express.Router();
const market = require("../db").import("../models/market");
const validateSession = require("../middleware/validate-session");

//
router.get("/", (req, res) => {
  market
    .findAll()
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

router.post("/add", validateSession, (req, res) => {
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

router.delete("/:id", validateSession, (req, res) => {
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

router.put("/:id", validateSession, (req, res) => {
  market
    .update(req.body, { where: { id: req.params.id } })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({ error: err }));
});

module.exports = router;
