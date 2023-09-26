import React from 'react';
import "./App.css";
import Container from './component/container/Container';
import SideBar from './component/sideBar/SideBar';
import LandingPage from './component/LandingPage';
import InsideApp from './InsideApp';
import RouteComponent from './RouteComponent';


function App() {
  return (
    <div className="App">
      <RouteComponent />
    </div>

  );
}

export default App;
