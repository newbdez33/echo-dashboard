import * as React from "react";
import { hot } from "react-hot-loader";
import Equity from "./Equity";
import 'antd/dist/antd.css';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Equity />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
