import "./App.css";
// import React, { useState, useContext, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Verify from "./components/pages/Verify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
