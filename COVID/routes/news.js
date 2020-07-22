var express = require('express');
var router = express.Router();

const news = require('../routes/news.json');
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(news));
});

module.exports = router;