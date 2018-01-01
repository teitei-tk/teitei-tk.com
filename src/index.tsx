import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <div><p>hello</p></div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root') as HTMLElement
);
