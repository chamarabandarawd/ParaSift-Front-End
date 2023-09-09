import React from 'react';
import "./App.css";
import Container from './component/container/Container';
import SideBar from './component/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
     <Container/>
    </div>
  );
}

export default App;
