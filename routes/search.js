var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(res.json({ msg: 'CCCCCCCCCCC' }));
});

module.exports = router;