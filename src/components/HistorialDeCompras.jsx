import React from "react";
import HistorialItem from "./Admin/HistorialItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HistorialDeCompras = () => {
  const user = useSelector((state) => state.user);
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/cart/userCarts", {
        ownerId: user.id,
      })
      .then((carritos) => setCarritos(carritos.data));
  }, []);

  return (
    <div>
      <Link to="/">
        <button className="btn btn-secondary btn-sm btn-color"> ↩ Home </button>
      </Link>

      <section className="pt-4">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Codigo de compra</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Envio</th>
            </tr>
          </thead>

          <tbody>
            {carritos.map((carrito, i) =>
              carrito.purchasedStatus ? (
                <HistorialItem carrito={carrito} key={i} i={i} />
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default HistorialDeCompras;
