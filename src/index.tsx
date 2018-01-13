import * as React from "react";
import * as ReactDOM from "react-dom";

import "furtive/css/furtive.min.css";

import { Summary } from "./components/summary";
import { Profile } from "./components/profile";
import { Accounts } from "./components/accounts";
import { Donate } from "./components/donate";
import { Footer } from "./components/footer";

class App extends React.Component {
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
