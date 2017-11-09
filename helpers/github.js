const request = require('request');
const config = require('../config.js');
const watch = require('./watch.js')

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
    // console.log('body: ', JSON.parse(body));
    var body = JSON.parse(body)
    watch('body.total_count', body.total_count)
    watch('body.incomplete_results', body.incomplete_results)
    watch('body.items.length', body.items.length)
    watch('body.items[0]', body.items[0])
    console.log(body.items[0])
  })
}

module.exports.getReposByUsername = getReposByUsername;
