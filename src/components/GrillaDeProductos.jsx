import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../Styles/GrillaDeProductos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  }, []);

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

// CONTADOR

// <div className="contador">
//                   <button type="button" className="btn btn-primary" >
//                   <i className="fa-solid fa-minus"></i>
//                   </button>
//                   <span >  </span>
//                   <button type="button" className="btn btn-primary" >
//                     <i className="fa-solid fa-plus"></i>
//                   </button>

//                 </div>
