import React, { useState } from "react";
import axios from "axios";
import "../Styles/ProductCard.css";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductCard = () => {
  const [comentarios, setComentarios] = useState([]);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [producto, setProducto] = useState([]);
  const productoId = useLocation().pathname.split("/")[2];
  let [counter, setCounter] = useState(0);

  // Constante alerte:
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/reviews/comentarios/${productoId}`)
      .then((res) => res.data)
      .then((comentarios) => setComentarios(comentarios))
      .then(() => {
        axios
          .get(`http://localhost:8000/api/products/${productoId}`)
          .then((res) => res.data)
          .then((producto) => setProducto(producto));
      });
  }, []);

  const ratingProducto = (
    comentarios.reduce((acc, el) => acc + el.rating, 0) / comentarios.length
  ).toFixed(2);
  // TENER EN CUENTA QUE SETSTATE (EN ESTE CASO SETCOUNTER) ES ASINCRÓNICO. Y NO SE PUEDE SETEAR COUNTER A MANO

  const handleClickSumar = (counter) => {
    let newCounter = counter + 1;
    return setCounter(newCounter);
  };
  const handleClickRestar = (counter) => {
    if (counter === 0) return;
    let newCounter = counter - 1;
    return setCounter(newCounter);
  };

  const handleAdd = (productId, cart, counter) => {
    // { cartId, productId, qty }
    const qty = Number(counter);
    const cartId = cart.cartId;
    axios.post(`http://localhost:8000/api/cart/addProduct`, {
      cartId,
      productId,
      qty,
    });

    //ALERTA:
    MySwal.fire({
      title: <p>Producto agregado al carrito!</p>,
    });
  };

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="http://localhost:3000/">Home</a>
            </li>
          </ol>
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "15%",
        }}
      >
        {user.id ? (
          <Link to="calificar">
            <button className="btn btn-primary">
              {ratingProducto === "NaN"
                ? "Producto Sin calificar"
                : ratingProducto}
              <i
                className="fa-solid fa-ranking-star"
                style={{ marginLeft: "2%" }}
              ></i>
            </button>
          </Link>
        ) : (
          <span>
            {ratingProducto === "NaN"
              ? "Producto Sin calificar"
              : ratingProducto}
            <i
              className="fa-solid fa-ranking-star"
              style={{ marginLeft: "2%" }}
            ></i>
          </span>
        )}
      </div>
      {/* _________________ */}

      <div id="alinearcard">
        <div
          className="card mb-3"
          style={{ width: "70%", backgroundColor: "faedcd" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={producto.mainImage} className="img-fluid round-start" />
            </div>
            <div className="col-md-8" id="cardindividual">
              <div className="card-body">
                <h5 className="card-title"> {producto.name} </h5>
                <br />
                <p className="card-text">{producto.description}</p>
                <p className="card-text" style={{ fontSize: "25px" }}>
                  {producto.price} $
                </p>

                <div id="cardindividualbotones">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={() => handleClickRestar(counter)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span id="counter"> {counter} </span>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleClickSumar(counter)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <br />
                  <br />
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm btn-color"
                    onClick={() => handleAdd(productoId, cart, counter)}
                  >
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    <b> Agregar </b>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* _______________________ */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3%",
          marginTop: "3%",
        }}
      >
        {" "}
        <h3>RESEÑAS DEL PRODUCTO </h3>{" "}
      </div>

      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evently",
          }}
        >
          {comentarios.map((review) => (
            <div className="col-sm-4">
              <div className="card" style={{ backgroundColor: "aliceBlue" }}>
                <div className="card-body">
                  <p className="card-text">{review.review}</p>
                  <button className="btn btn-primary">
                    {" "}
                    <i className="fa-solid fa-star"> </i> {review.rating}{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductCard;
