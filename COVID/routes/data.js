var express = require('express');
var router = express.Router();

const data = require('./data')
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;