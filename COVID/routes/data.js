var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(res.json({imgs: [
      {title: "img1", img:"https://miro.medium.com/max/552/1*IiBpmNpOO2uVZ1Rl-2ve1w.png"},
      {title: "img2", img:"https://miro.medium.com/max/552/1*N2SiILJsBzEY_MhRg8XD-A.png"},
      {title: "img3", img:"https://miro.medium.com/max/552/1*8rUH1f6phMghWkPXk_vzlg.png"},
      {title: "img4", img:"https://miro.medium.com/max/552/1*KINtkkqoW9oEr2LZmrHCag.png"},
    ], date: "6/16/2020"}));
});

module.exports = router;