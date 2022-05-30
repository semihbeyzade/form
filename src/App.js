import React from "react";
import SchreibList from "./components/SchreibList";
import SchreibDetails from "./components/SchreibDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
        <Routes>
        <Route path="/" element={<SchreibList />} />
        <Route path="/posts/:id" element={<SchreibDetails />} />
        </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
