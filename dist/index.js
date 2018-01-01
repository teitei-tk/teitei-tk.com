"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
require("furtive/css/furtive.min.css");
const App = () => {
    return (React.createElement("div", null,
        React.createElement("p", null, "aaaaaaa")));
};
ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));
