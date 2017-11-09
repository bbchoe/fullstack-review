const express = require('express');
const bodyParser = require('body-parser')
const helpers = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use('/repos', bodyParser.json());

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('SERVING POST REQUEST FROM ', req.body)
  helpers.getReposByUsername(req.body.githubUsername, (repoArray) => {
    // callback function takes in an array of repos
    // iterates through each repo and saves to database
    repoArray.forEach((repo) => {
      db.save(repo)
    })
  })
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos based on the number of forks
  console.log('SERVING GET REQUEST FROM ', req.body)
  db.retrieve((err, results) => {
    if (err) {
      console.log('there was an error ', err)
    } else {
      console.log('results ', results)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
