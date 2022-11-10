import React from "react";
import HistorialItem from "./Admin/HistorialItem";
import { Link } from "react-router-dom";

const HistorialDeCompras = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-secondary btn-sm btn-color"> ↩ Home </button>
      </Link>

      <section className="pt-4">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {/* {users.map((user, i) => (
              <HistorialItem compra={compra} key={i} i={i} />
            ))} */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default HistorialDeCompras;
