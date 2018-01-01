import * as React from 'react';
import * as ReactDOM from 'react-dom';

import githubClient from './components/profile/github'


import 'furtive/css/furtive.min.css'

const App = () => {
  const r = githubClient.fetchProfile()
  return (
    <div><p>`${r.name}`</p></div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root') as HTMLElement
);
