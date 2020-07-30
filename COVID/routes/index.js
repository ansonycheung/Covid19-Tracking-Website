var express = require('express');
var router = express.Router();
var cronJob= require('cron').CronJob;

var spiderJob = new cronJob('* 0 * * * *', function updateData() {
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
spiderJob.start();

module.exports = router;
