import React from "react";
import { Link } from "react-router-dom";

const HistorialItem = ({ carrito }) => {

  return (
    <tr>
      <Link to={`/historial_de_compras/${carrito.id}`}>
        <td>{`#${carrito.id}`}</td>
      </Link>
      <td>{carrito.createdAt.slice(0, 10)}</td>
      <td>{carrito.total ? `$${carrito.total}` : "-"}</td>
      <td>{carrito.purchasedStatus ? "Comprado" : "Pendiente"}</td>
      <td>{carrito.shippingStatus ? "En camino" : "Pendiente"}</td>
    </tr>
  );
};

export default HistorialItem;

