let express = require('express');
let router = express.Router();
router.get('/practice', validateSession, function(req, res) {

    res.send("Hey!!! This is a practice route!");
});

module.exports = router;
