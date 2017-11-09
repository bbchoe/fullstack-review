const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: String,
  name: String,
  full_name: String,
  ownerLogin: String,
  html_url: String,
  description: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // This function should save a repo or repos to
  // the MongoDB
  // if (incomingError) {
  //   console.log('PROBLEM WITH TRYING TO GET REPO')
  // } else {
  //   var newRepo = new Repo(repo)
  //   repo.save(err => {
  //     if (err) {
  //       console.log('ERROR WHILE SAVING REPO')
  //     } else {
  //       console.log('SUCCESSFULLY SAVED REPO')
  //     }
  //   })
  // }
}

module.exports.save = save;
