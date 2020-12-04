import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import ProfileCards from "./components/ProfileCards/ProfileCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";


function App() {
  return (
    <div className="app">
     
     <Header />
     
     <ProfileCards />
     
     <SwipeButtons />
    </div>
  );
}

export default App;
