import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./css/line.css";
import Title from "./page/title";

class App extends React.Component {
  render() {
    return (
      <section class="lines">
        <div class="line" />
        <div class="line" />
        <div class="line" />

        <Title />
      </section>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
