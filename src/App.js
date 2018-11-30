import React from "react";
import "./App.css";

import MainPage from "./components/MainPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Fine-nance</h1>

        <MainPage />
      </div>
    );
  }
}

export default App;
