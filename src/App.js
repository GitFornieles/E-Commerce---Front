import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import Registro from "./components/Registro";
import { Route, Routes } from "react-router";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registro />} />

      </Routes>
    </div>
  );
}

export default App;
