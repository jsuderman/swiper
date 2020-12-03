import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import ProfileCards from "./components/ProfileCards/ProfileCards";


function App() {
  return (
    <div className="app">
     

     {/* header */}
     <Header />
     {/* Cards */}
     <ProfileCards />
     {/* toggle buttons */}
    </div>
  );
}

export default App;
