import React, { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useState } from "react";
import ProductoCarrito from "./ProductoCarrito";
import { Link } from "react-router-dom";

const CompraItem = () => {
  const cartId = useLocation().pathname.split("/")[2];
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/cart", { cartId })
      .then((result) => setCarrito(result.data.productos));
  }, []);

  return (
    <div>
      <div>
        <Link to="/historial_de_compras">
          <button className="btn btn-secondary btn-sm btn-color">
            {" "}
            ↩ Atras{" "}
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary btn-sm btn-color"> Home </button>
        </Link>
      </div>
      <section className="pt-4">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio por unidad</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {carrito.map((producto, i) => (
              <ProductoCarrito producto={producto} key={i} i={i} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CompraItem;
