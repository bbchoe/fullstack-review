const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// test database connection
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
  console.log('SUCCESSFUL DATABASE CONNECTION')
})

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

let saveToDb = (repo) => {
  // This function should save a repo or repos to
  // the MongoDB
  let newRepo = new Repo(repo)
  newRepo.save(err => {
    if (err) {
      console.log('ERROR WHILE SAVING REPO')
    } else {
      console.log('SUCCESSFULLY SAVED REPO')
    }
  })
}

let retrieveFromDb = (callback) => {
  // Retrieve top 25 most forked repos listed in the database
  let queryParameters = [
    { $sort: { fork: -1 } },
    { $limit: 25 }]
  Repo.aggregate(queryParameters, callback)
}

module.exports.retrieve = retrieveFromDb
module.exports.save = saveToDb
