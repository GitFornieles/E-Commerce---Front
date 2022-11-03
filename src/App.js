import React from "react";
import Navbar from "./components.js/Navbar";
import "./App.css";
import ProductCard from "./commons/ProductCard";
import Registro from "./components.js/Registro";
import { Route, Routes } from "react-router";
import GrillaDeProductos from './components/GrillaDeProductos';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/velas" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
