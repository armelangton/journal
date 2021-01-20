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

    //find all

router.get('/', (req, res) => {
  Animal.findAll()
  .then(animals => res.status(200).json(animals))
  .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;

/* Silver challenge 
Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from the database.  
However you complete this challenge, a request must be able to specify which animal needs to be deleted.  
If the delete was successful, inform the user, otherwise alert the user to an error. */

router.delete("/delete/:id", function(req, res) {
  const query = {where: {id: req.params.id}};

  Animal.destroy(query)
  .then(() => res.status(200).json({message: "Animal Entry Removed"}))
  .catch((err) => res.status(500).json({error: err}));
})
