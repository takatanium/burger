let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
  	let hbsObject = {
		  burgers: data
	  };
  	res.render("index", hbsObject)
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.name, (result) => 
    res.json({ id: result.id }));
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
