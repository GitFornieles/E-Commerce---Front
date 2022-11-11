import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setCart } from "../store/cart";

const VistaCheckout = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [medio, setMedio] = useState("");
  const dispatch = useDispatch();
  const [pago, setPago] = useState({});

  const handlePayment = (e) => {
    setMedio(e.target.id);
  };

  const confirm = (e) => {
    e.preventDefault();
    //Armo array con información de cantidades y productId para pasar al Server y modificar disponibilidades
    let consumos=cart.productos.map(elemento=>{return {productId:elemento.productId,sold:elemento.qty}})
    console.log(consumos)
    const payment = {
      cartId: cart.cartId,
      total: cart.total,
      ownerId: user.id,
      consumos:consumos
    };
    axios
      .post("http://localhost:8000/api/payment/", payment)
      .then((response) => {
        let newCart = { cartId: response.data.cartId, productos: [], total: 0 };
        dispatch(setCart(newCart));
        setPago(response.payment);
      });
    axios
      .post("http://localhost:8000/api/mail/", { email: user.email })
      .then((response) => {
        alert("deberias haber recibido la confirmacion de pago en tu mail");
      });
  };
  return (
    <>
      <h1>CheckOut</h1>
      <div>
        <h3>Total a Pagar: </h3>
        <h4>{cart.total}</h4>
      </div>
      <div>
        <h4>MEDIOS DE PAGO</h4>
        <div id="botonera">
          <button id="tarjeta" onClick={handlePayment}>
            {" "}
            Tarjeta de Crédito
          </button>
          <button id="tarjeta" onClick={(e) => handlePayment(e)}>
            {" "}
            Tarjeta de Débito
          </button>
          <button id="mercadopago" onClick={(e) => handlePayment(e)}>
            {" "}
            MercadoPago{" "}
          </button>
        </div>
      </div>
      {medio ? (
        medio === "tarjeta" ? (
          <>
            <h4>FORMULARIO TARJETA</h4>
            <form action="" onSubmit={(e) => confirm(e)}>
              <label htmlFor="">Número de Tarjeta</label>
              <input type="text" />
              <label htmlFor="">CVV</label>
              <input type="text" />
              <label htmlFor="">Exp Date</label>
              <input type="date" />
              <button type="submit">CONFIRMAR</button>
            </form>
          </>
        ) : (
          <>
            <h4>FORMULARIO MERCADOPAGO</h4>
            <form action="" onSubmit={(e) => confirm(e)}>
              <label htmlFor="">ALIAS/email</label>
              <input type="text" />
              <label htmlFor="">Password</label>
              <input type="Password" />
              <button type="submit">CONFIRMAR</button>
            </form>
          </>
        )
      ) : (
        <h4>CONFIRMAR PAGO</h4>
      )}
      {!pago ? (
        <div id="confirmacion">
          <h4>PAGO CONFIRMADO</h4>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VistaCheckout;
