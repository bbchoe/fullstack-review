import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const serverURL = 'http://localhost:1128'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  getFreshList() {
    console.log('IN GETFRESH')
    let options = {
      method: 'GET',
      url: serverURL + '/repos',
      contentType: 'application/json',
      error: (jqXHR, statusText, errorThrown) => {
        console.log('GET REQUEST FAILED: ', statusText)
      },
      success: (data, statusText,jqXHR) => {
        console.log('SUCCESSFULLY SENDING GET REQUESTS')
        console.log(data);
        this.setState( { repos: data } )
      }
    }
    $.ajax(options)
  }

  search (term) {
    console.log(`${term} was searched`)
    let gitUser = JSON.stringify({ githubUsername : term })
    console.log(gitUser, typeof gitUser)

    // SEND $.AJAX POST REQUEST TO SERVER FOR SEARCH TERM
    let options = {
      method: 'POST',
      url: serverURL + '/repos',
      contentType: 'application/json',
      data: gitUser,
      success: (data, statusText, jqXHR) => {
        console.log('POST REQUEST - SEND SUCCESSFUL: ', statusText)
      },
      error: (jqXHR, statusText, errorThrown) => {
        console.log('POST REQUEST SEND FAILED: ', statusText)
      }
    }
    $.ajax(options)
  }

  componentWillMount() {
    console.log('RETRIEVING TOP 25 REPOS')
    this.getFreshList()
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
