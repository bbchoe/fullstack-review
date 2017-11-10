import React from 'react'

const RepoItem = (props) => (
  <tr>
    <td>{props.repo.name}</td>
    <td>{props.repo.full_name}</td>
    <td><a href = { props.repo.html_url }>{ props.repo.html_url }</a></td>
    <td>{props.repo.description}</td>
    <td>{props.repo.forks}</td>
  </tr>
)

export default RepoItem;
