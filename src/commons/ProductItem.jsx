import React from "react";
import "../Styles/GrillaDeProductos.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ProductItem = ({ product }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // hay que agregar la funcionalidad del boton "AGREGAR" ====> esto esta pendiente <====
  const handleClickAgregar = () => {
    axios.post("http://localhost:8000/api/products/add");
  };

  /*
  SI ES ADMIN LE VA A FIGURAR LA OPCION DE EDITAR EL PRODUCTO. DE LO CONTRARIO PUEDE AGREGARLO AL CARRITO.
  */

  // Funcionalidad del boton ELIMINAR (eliminar productos):
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/products/${product.id}`)
      .then(() => alert("Producto eliminado correctamente!"))
      .then(() => navigate("/"));
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

        <div>
          {user.admin ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="p-2">
                <Link to={`/admin/edit_product/${product.id}`}>
                  <button
                    type="button"
                    className="btn btn-success btn-sm btn-color"
                  >
                    <b> Editar Producto</b>
                  </button>
                </Link>
              </div>

              <div className="p-2">
                <button
                  type="button"
                  className="btn btn-danger btn-sm btn-color"
                  onClick={deleteProduct}
                >
                  <b> Eliminar Producto</b>
                </button>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
