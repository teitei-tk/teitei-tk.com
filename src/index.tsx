import * as React from "react";
import * as ReactDOM from "react-dom";

import * as ReactGA from "react-ga";

import "furtive/css/furtive.min.css";

import { Summary } from "./components/summary";
import { Profile } from "./components/profile";
import { Accounts } from "./components/accounts";
import { Donate } from "./components/donate";
import { Footer } from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    ReactGA.initialize("UA-30698887-6");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <Summary />
        <Profile />
        <Accounts />
        <Donate />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
