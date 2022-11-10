import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../styles/GrillaDeProductos.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductItem from "../commons/ProductItem";

const GrillaDeProductos = () => {
  //se crea estado local para llamar a la lista de productos y mostrarlos en la grilla
  const [productos, setProductos] = useState([]);

  //se utiliza useEffect para hacer el pedido axios a la ruta de productos
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => res.data)
      .then((productos) => setProductos(productos));
  }, [productos]);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {productos.map((product, i) => (
          <ProductItem product={product} key={i} i={i} />
        ))}
      </div>
    </>

  );
};

export default GrillaDeProductos;


