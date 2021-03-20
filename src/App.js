import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { toggleDarkMode } from "halfmoon";

export default class App extends Component {
  render() {
    return (
      <main className="container">
        <button className="btn btn-primary" onClick={toggleDarkMode}>
          <i className="far fa-moon"></i>
        </button>
        <Movies />
      </main>
    );
  }
}
