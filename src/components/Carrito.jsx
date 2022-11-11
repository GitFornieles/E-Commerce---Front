import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarritoItem from "../commons/CarritoItem";
import { useEffect } from "react";
import { setCart } from "../store/cart";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addProd, remProd, vaciar, elimProd } from "../store/cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Carrito = () => {
  let cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/cart/currentCart`, {
        ownerId: user.id,
      })
      .then((result) => {
        return dispatch(setCart(result.data));
      });
  }, []);
  cart = useSelector((state) => state.cart);

  const handlePlus = (e, disponibilidad) => {
    const productId = e.target.id;
    // El código de abajo es para romper la relación entre las variables que trabajo y el estado cart; de lo contrario siempre devolvía que es "read-only"
    let newCart = JSON.parse(JSON.stringify(cart));
    let newProductos = [];
    newCart.productos.forEach(
      (producto, index) => (newProductos[index] = producto)
    );
    const currentProd = newProductos.findIndex(
      (element) => element.productId == productId
    );
    if (newProductos[currentProd].qty >= disponibilidad) return;
    newProductos[currentProd].qty++;
    newCart = { cartId: cart.cartId, productos: newProductos };
    return dispatch(addProd(newCart));
  };
  const handleMinus = (e) => {
    const productId = e.target.id;
    // El código de abajo es para romper la relación entre las variables que trabajo y el estado cart; de lo contrario siempre devolvía que es "read-only"
    let newCart = JSON.parse(JSON.stringify(cart));
    let newProductos = [];
    newCart.productos.forEach(
      (producto, index) => (newProductos[index] = producto)
    );
    const currentProd = newProductos.findIndex(
      (element) => element.productId == productId
    );
    if (newProductos[currentProd].qty <= 0) return;
    newProductos[currentProd].qty--;
    newCart = { cartId: cart.cartId, productos: newProductos };
    return dispatch(remProd(newCart));
  };

  const handleSave = () => {
    const ownerId = user.userId;
    const productos = cart.productos;
    const cartId = cart.cartId;

    let cambioCantidades = productos.reduce((acum, elemento) => {
      acum.push({ id: elemento.id, qty: elemento.qty });
      return acum;
    }, []);

    MySwal.fire({
      title: <p>Carrito guardado</p>,
    });

    return axios.put(
      "http://localhost:8000/api/cart/saveCart",
      cambioCantidades
    );
  };

  const handlePurchase = () => {
    handleSave();
    navigate("/checkout");
  };

  const handleDelete = (e) => {
    const productId = e.currentTarget.id;
    axios
      .post("http://localhost:8000/api/cart/remProduct", {
        cartId: cart.cartId,
        productId: productId,
      })
      .then(() => {
        return dispatch(elimProd(productId));
      });
  };

  const handleEmptyCart = () => {
    axios
      .post("http://localhost:8000/api/cart/emptyCart", {
        cartId: cart.cartId,
      })
      .then(() => {
        return dispatch(vaciar());
      });
  };

  return (
    <div className="container-fluid">
      {!user.id ? (
        <Link to="/login">
          <h3>LOGUEATE</h3>
        </Link>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Num</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Disponibilidad</th>
              <th scope="col">Cantidad</th>
              <th scope="col">SUBTOTAL</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.productos.length
              ? cart.productos.map((elemento) => {
                  return (
                    <CarritoItem
                      key={elemento.id}
                      producto={elemento.product}
                      qty={elemento.qty}
                      id={elemento.product.id}
                      handlePlus={handlePlus}
                      handleMinus={handleMinus}
                      handleDelete={handleDelete}
                    />
                  );
                })
              : ""}
          </tbody>
        </table>
      )}
      <div id="valorTotal">
        <h3>Total de la Compra:</h3>
        <h4>{cart.total}</h4>
      </div>
      <div id="botonera">
        {cart.total > 0 ? (
          <button className="btn btn-secondary btn-sm" onClick={handlePurchase}>
            COMPRAR
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-secondary btn-sm" onClick={handleEmptyCart}>
          BORRAR
        </button>

        <button className="btn btn-secondary btn-sm" onClick={handleSave}>
          GUARDAR
        </button>
      </div>
    </div>
  );
};

export default Carrito;
