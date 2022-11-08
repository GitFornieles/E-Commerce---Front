import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductCard from "./commons/ProductCard";
import Registro from "./components/Registro";
import { Route, Routes } from "react-router";
import GrillaDeProductos from "./components/GrillaDeProductos";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/grilla/:id" element={<ProductCard />} />
        <Route path="/grilla" element={<GrillaDeProductos />} />
      </Routes>

    </div>
  );
}

export default App;
