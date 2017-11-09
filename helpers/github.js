const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // From Github
  // repository_search_url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'
  let options = {
    url: 'https://api.github.com/search/repositories',
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${config.TOKEN}`
    },
    qs: {
      q: username
    }
  };
  request(options, (err, response, body) => {
    console.log('ERR ', err)
    console.log('RESPONSE ', response.statusCode);
    console.log('body: ', JSON.parse(body));
  })
}

module.exports.getReposByUsername = getReposByUsername;
