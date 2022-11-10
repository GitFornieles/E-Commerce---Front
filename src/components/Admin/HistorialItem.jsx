import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HistorialItem = ({ carrito }) => {
  const [compra, setCompra] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/cart", { cartId: carrito.id })
      .then((result) => setCompra(result.data));
  }, []);

  return (
    <tr>
      <td></td>
      <td>Producto</td>
      <td>Fecha</td>
      <td>Total</td>
      <td>{carrito.purchasedStatus ? "Comprado" : "Pendiente"}</td>
      <td>{carrito.shippingStatus ? "Enviado" : "Pendiente"}</td>
    </tr>
  );
};

export default HistorialItem;
