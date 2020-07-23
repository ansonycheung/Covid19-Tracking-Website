var express = require('express');
var router = express.Router();
var cronJob= require('cron').CronJob;

var myJob1 = new cronJob('0 * * * * *', function updateData() {
  const spawn = require('child_process').spawn;
  const ls = spawn('python', ['./routes/data2json.py']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
myJob1.start();

var myJob2 = new cronJob('*/30 * * * * *', function updateData() {
  const spawn = require('child_process').spawn;
  process.chdir("./routes/newsSpider/");
  const ls = spawn('python', ['pyRun.py']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  //
  // ls.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  process.chdir("../..");
});
myJob2.start();


/* GET home page. */
// router.get('/', (req, res) => {
//   res.render("index", {title: "hiiiiiiiii"})
// })

module.exports = router;
