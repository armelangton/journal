var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');
router.post('/create', function (req, res) {
  Animal.create({
    name: req.body.name,
    legNumber: req.body.legNumber,
    predator: req.body.predator,
  })
    .then(
 function createSuccess(animal) {
   res.json.({
   animal: animal, 
   message: 'Success!',
 });
    }
    )
    .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;