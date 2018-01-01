import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'furtive/css/furtive.min.css'

const App = () => {
  return (
    <div><p>test</p></div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root') as HTMLElement
);
