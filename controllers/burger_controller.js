let router = require("express").Router();
let burger = require("../models/burger");

router.get("/", async function(req, res) {
  burger.getAll(function(err, data) {
    if (err) return res.status(500).json(err);
    res.render("index", { burgers: data });
  });
});

router.post("/", function(req, res) {
  let newBurger = req.body.burger;
  console.log(newBurger);
  burger.createBurger(newBurger, function(err, data) {
    if (err) return res.status(500).json(err);
    res.status(200).json("Success!");
  });
});

router.put("/", function(req, res) {
  let burgerID = req.body.burger;
  burger.eatBurger(burgerID, function(err, data) {
    if (err) return res.status(500).json(err);
    res.status(200).json("Success!");
  });
});
module.exports = router;