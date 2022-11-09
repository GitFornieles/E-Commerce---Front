import React from "react";
import "../Styles/GrillaDeProductos.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItem = ({ product }) => {
  // hay que agregar la funcionalidad del boton "AGREGAR" ====> esto esta pendiente <====
  const handleClickAgregar = () => {
    axios.post("http://localhost:8000/api/products/add");
  };

  return (
    <div className="card" style={{ width: "25rem" }} key={product.id}>
      <img src={product.mainImage} alt="ACA VA LA FOTO" />

      <div className="card-body" id="cardposition">
        <h5 className="card-title">{product.price} $</h5>
        <Link to={`../grilla/${product.id}`} style={{ textDecoration: "none" }}>
          <p className="card-text"> {product.name} </p>
        </Link>

        <br />
        <span> STOCK {product.stock}</span>
        <br />
        <br />
        <button
          type="button"
          className="btn btn-secondary btn-sm btn-color"
          id="agregar"
          onClick={handleClickAgregar}
        >
          <span className="glyphicon glyphicon-shopping-cart"></span>
          <b> Agregar </b>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
