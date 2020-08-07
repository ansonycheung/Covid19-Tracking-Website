var express = require('express');
var router = express.Router();
var PostDB = require("post");

router.get('/', function(req, res) {
  PostDB.find({}, function (err, allPosts) {
    if (err) {console.log(err)} else {res.send(res.json({posts: allPosts}))};
  });
});

router.get('/new', function (req, res) {});

router.post('/posts', function (req, res) {
  // ???
});

router.get('/posts/:id', function (req, res) {
  PostDB.findById(req.params.id, function (err, foundPost) {
    if(err) {res.redirect('/');} else {res.send(res.json({post: foundPost}))}
  });
});

module.exports = router;