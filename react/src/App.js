import React from 'react';

import './App.css';
import NavBar from "./component/NavBar";
import Jumbotron from "./component/Jumbotron";
import Branches from "./component/Branches";
import Contents from "./component/Contents";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <Branches/>
      <Contents/>
    </div>
  );
}

export default App;
