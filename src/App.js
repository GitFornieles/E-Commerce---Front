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
import UsersList from "./components/Admin/UsersList";
import AddProducts from "./components/Admin/AddProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/grilla/:id" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/velas" element={<ProductCard />} />
        <Route path="/grilla" element={<GrillaDeProductos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<AdminLogIn />} />
        <Route path="/admin/all_users" element={<UsersList />} />
        <Route path="/admin/add_product" element={<AddProducts />} />
      </Routes>
    </div>
  );
}

export default App;
