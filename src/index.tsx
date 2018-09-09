import * as React from "react";
import * as ReactDOM from "react-dom";

import * as ReactGA from "react-ga";

import "furtive/css/furtive.min.css";

import { Components } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);

    ReactGA.initialize("UA-30698887-6");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return <Components />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
