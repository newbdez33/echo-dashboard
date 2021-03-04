import * as React from "react";
import { hot } from "react-hot-loader";
import Equity from "./Equity";
import 'antd/dist/antd.css';

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Title from "antd/lib/typography/Title";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Title level={3}>Equity (USDT)</Title>
        <Equity />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
