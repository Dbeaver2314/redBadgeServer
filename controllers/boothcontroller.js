const express = require("express");
const router = express.Router();
const booth = require("../db").import("../models/booth");
//

router.post("/add", (req, res) => {
  const addBooth = {
    farmName: req.body.farmName,
    address: req.body.address,
    URL: req.body.URL,
    bio: req.body.bio,
    atMarket: req.body.atMarket,
    likes: req.body.likes,
    userId: req.user.id,
    marketId: req.body.marketId
  };
  booth
    .create(addBooth)
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

// get Booths   WAITING ON RELATIONSHIPS
router.get("/", (req, res) => {
  booth
    .findAll()
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

router.get("/bymarket", (req, res) => {
  booth
    .findAll({
      where: { marketId: req.body.marketId }
    })
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});

router.get("/byvendor", (req, res) => {
  booth
    .findAll({
      where: { userId: req.user.id }
    })
    .then(log => res.status(200).json(log))
    .catch(err =>
      res.json({
        error: err
      })
    );
});
router.delete("/:id", (req, res) => {
  booth
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
  booth
    .update(req.body, { where: { id: req.params.id } })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({ error: err }));
});

module.exports = router;
