var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function(req, res, next) {
    fs.watch("./routes/newsSpider/News.json", function () {
        try{
            let news = require('../routes/newsSpider/News.json');
            res.send(JSON.stringify(news));
        } catch (e) {}
    });
});

module.exports = router;