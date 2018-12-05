import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import MainPage from "./components/MainPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
           <MainPage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
