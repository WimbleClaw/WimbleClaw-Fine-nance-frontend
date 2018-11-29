

import React from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import MainPage from './components/MainPage';



class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h1>Fine-nance</h1>
              {/* <Login></Login> 
             <Signup></Signup> */}
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
