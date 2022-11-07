import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductCard from "./commons/ProductCard";
import Registro from "./components/User/Registro";
import { Route, Routes } from "react-router";
import GrillaDeProductos from "./components/GrillaDeProductos";
import Home from "./components/Home";
import Login from "./components/User/LogIn";
import AdminLogIn from "./components/Admin/AdminLogIn";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/velas" element={<ProductCard />} />
        <Route path="/grilla" element={<GrillaDeProductos />} />
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<AdminLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
