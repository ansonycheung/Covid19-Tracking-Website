var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function(req, res, next) {
	try {
		let news = require('../routes/newsSpider/News.json');
		res.send(JSON.stringify(news));
	} catch (e) {
		console.log('Working...');
	}
	// fs.watch("./routes/newsSpider/News.json", function () {
	//     try{
	//         let news = require('../routes/newsSpider/News.json');
	//         console.log("news")
	//         res.send(JSON.stringify(news));
	//     } catch (e) {
	//         console.log("Working...")
	//     }
	// });
});

module.exports = router;
