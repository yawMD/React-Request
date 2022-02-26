import React from "react";
import './App.css';
import homepage from "./homepage";
import {Route, Routes, Link} from "react-router-dom";
import Login from "./login";
import HomePage from "./homepage";
import Admin from "./admin";
import Request from "./requestform";

function App() {
  return (
      <div className="App" >
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/homepage" element={<HomePage />} />
              <Route exact path="/admin" element={<Admin />}/>
              <Route exact path="/request" element={<Request />} />
          </Routes>
      </div>
  );
}

export default App;
