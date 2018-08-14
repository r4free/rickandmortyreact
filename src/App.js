import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CardList />
      </div>
    );
  }
}

export default App;
