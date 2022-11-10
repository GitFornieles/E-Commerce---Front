import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductCard from "./commons/ProductCard";
import Registro from "./components/User/Registro";
import { Route, Routes } from "react-router";
import GrillaDeProductos from "./components/GrillaDeProductos";
import Carrito from "./components/Carrito";
import Home from "./components/Home";
import Login from "./components/User/LogIn";
import AdminLogIn from "./components/Admin/AdminLogIn";
import Reviews from "./commons/Reviews";
import Categorias from "./commons/Categorias";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/register" element={<Registro />} />  
        <Route path="/grilla/:id" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/velas" element={<ProductCard />} />     
        <Route path="/grilla" element={<GrillaDeProductos />} />
        <Route path="/carrito" element={<Carrito />} />
         <Route path="/login/admin" element={<AdminLogIn />} />
        <Route path="/grilla/:id/calificar" element={<Reviews/>} />
        <Route path="/categorie/:categorie" element={<Categorias/>} />
      </Routes>

    </div>
  );
}

export default App;
