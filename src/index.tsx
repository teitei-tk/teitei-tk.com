import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'furtive/css/furtive.min.css'

import { Summary } from './components/summary'
import { Profile } from './components/profile'
import { Accounts } from './components/accounts'
import { Contants } from './components/contants'

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Summary />
        <Profile />
        <Accounts />
        <Contants />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root') as HTMLElement
);
