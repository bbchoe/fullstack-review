const express = require('express');
const bodyParser = require('body-parser')
const helpers = require('../helpers/github.js')


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use('/repos', bodyParser.json());

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('SERVING POST REQUEST FROM ', req.body)
  console.log(typeof req.body)
  helpers.getReposByUsername(req.body.githubUsername, (repoArray) => {
    // callback function takes in an array of repos
    // iterates through each repo and saves to database
    repoArray.forEach((repo) => {
      console.log('REPO.NAME ', repo.name)
      console.log('REPO.FULL_NAME ', repo.full_name)
    })
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
