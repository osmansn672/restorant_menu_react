// App.js
import React from "react";
import Menu from "./Menu";
import Foods from "./Foods";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1 className="h1"> Özsa Kafe & Restaurant</h1>
      </header>
      <Menu />
      <Foods />
    </div>
  );
};

export default App;
