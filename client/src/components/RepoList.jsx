import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    First repo is {props.repos[0].name}.
  </div>
)

export default RepoList;
