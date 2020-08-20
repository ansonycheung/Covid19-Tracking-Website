var express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
var router = express.Router();
let settings = { method: "Get" };
// let states_all = {};
function writeFileSyncRecursive(filename, content, charset) {
  // -- normalize path separator to '/' instead of path.sep,
  // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
  let filepath = filename.replace(/\\/g,'/');

  // -- preparation to allow absolute paths as well
  let root = '';
  if (filepath[0] === '/') {
    root = '/';
    filepath = filepath.slice(1);
  }
  else if (filepath[1] === ':') {
    root = filepath.slice(0,3);   // c:\
    filepath = filepath.slice(3);
  }

  // -- create folders all the way down
  const folders = filepath.split('/').slice(0, -1);  // remove last item, file
  folders.reduce(
      (acc, folder) => {
        const folderPath = acc + folder + '/';
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }
        return folderPath
      },
      root // first 'acc', important
  );

  // -- write file
  fs.writeFileSync(root + filepath, content, charset);
}
router.get('/', function(req, res, next) {
  const states = ["us", "ak", "al", "ar", "as", "az", "ca", "co", "ct",
      "dc", "de", "fl", "ga", "gu", "hi", "ia", "id", "il", "in", "ks",
      "ky", "la", "ma", "md", "me", "mi", "mn", "mo", "mp", "ms", "mt",
      "nc", "nd", "ne", "nh", "nj", "nm", "nv", "ny", "oh", "ok", "or",
      "pa", "pr", "ri", "sc", "sd", "tn", "tx", "ut", "va", "vi", "vt",
      "wa", "wi", "wv", "wy"];
  // for (let i = 1; i < states.length; i++) {states[i] = "states/" + states[i]}
  for (let i = 0; i < states.length; i++) {
    let path;
    if(i == 0){path = states[0]}
    else{path = "states/" + states[i]}
    let url = 'https://covidtracking.com/api/v1/' + path + '/daily.json';
    fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      try {
        writeFileSyncRecursive("./routes/data2/"+states[i]+".json", JSON.stringify(json))
      } catch (err) {
        console.error(err)
      }
    });
  }
  fetch('https://covidtracking.com/api/v1/states/current.json', settings)
  .then(res => res.json())
  .then((json) => {
    try {
      writeFileSyncRecursive("./routes/data2/all_states.json", JSON.stringify(json))
    } catch (err) {
      console.error(err)
    }
  });
  let states_all = {};
  // let states_all = [];
  // states_all.push(require('./data2/' + states[0] + '.json'));
  for (let i = 0; i< states.length; i++){
    states_all[states[i].toUpperCase()] = require('./data2/' + states[i] + '.json');
    // states_all.push(require('./data2/states/' + states[i] + '.json'));
  }
  states_all["states"] = require('./data2/all_states.json');
  // states_all.push(require('./data2/all_states.json'));
  // console.log(states_all.length);
  // res.render('pages/data')
  // console.log(Object.keys(states_all));
  res.send(JSON.stringify(states_all));
});

module.exports = router;