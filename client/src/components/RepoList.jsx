import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <th>Repo</th>
          <th>Full Name</th>
          <th>URL</th>
          <th>Description</th>
          <th># of Forks</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map((repo, index) => {
          return (<RepoItem repo={repo} key={index}/>)
        })}
      </tbody>
    </table>
  </div>
)


export default RepoList;
