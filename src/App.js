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
import UsersList from "./components/Admin/UsersList";
import HistorialDeCompras from "./components/HistorialDeCompras";
import AddProducts from "./components/Admin/AddProducts";
import AdminProducts from "./components/Admin/AdminProducts";



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
        <Route path="/grilla/:id/calificar" element={<Reviews/>} />
        <Route path="/categorie/:categorie" element={<Categorias/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<AdminLogIn />} />
        <Route path="/admin/all_users" element={<UsersList />} />
        <Route path="/historial_de_compras" element={<HistorialDeCompras />} />
        <Route path="/admin/add_product" element={<AddProducts />} />
        <Route path="/admin/edit_product/:id" element={<AdminProducts />} />

      </Routes>
    </div>
  );
}

export default App;
