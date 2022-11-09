import React from "react";
import { useSelector } from "react-redux";
import CarritoItem from "../commons/CarritoItem";


const Carrito = () => {
  const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user)

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((producto) => {
            return <CarritoItem producto={producto} key={producto.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Carrito;
