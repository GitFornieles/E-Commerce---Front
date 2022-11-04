import React, { useState } from "react";
import axios from "axios";
import "../Styles/ProductCard.css";

const ProductCard = ({ user, product }) => {
  /*
  - Primero se pasa toda la informacion del usuario loggeado y la del producto seleccionado.
  - Cree un objeto de ejemplo (vela) para probar, hay que eliminarlo despues.
  - En el post para el CARRITO, le paso un objeto con los datos del: usuario, producto y cantidad seleccionada.
  */

  //Objeto de ejemplo:
  const vela = {
    name: "Vela blanca",
    categorie: "Velas",
    description: "Vela blanca. Baja combustion.",
    price: 4500,
    stock: 5,
    rating: 4,
    imgUrl:
      "https://bohemiavelas.com.ar/wp-content/uploads/2020/05/Vela-Natural-Bohemia-Velas-Aromas-01.jpg",
  };

  // ESTADOS:
  const [metodoPago, setMetodoPago] = useState(true);
  const [quantity, setQuantity] = useState(0); // cantidad de unidades a comprar

  // Handle functions:
  const handlePago = () => {
    setMetodoPago(true);
  };

  const handleEnvio = () => {
    setMetodoPago(false);
  };

  // Contador de cantidades:
  const contadorMas = () => {
    setQuantity(quantity + 1);
  };

  const contadorMenos = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  };

  // Agregar al carrito:
  const handleBuy = () => {
    user
      ? axios
          .post("/api/cart", { quantity, product, user })
          .then(() =>
            console
              .log(`Producto agregado al carrito`)
              .catch((err) => console.error(err))
          )
      : alert(
          `Necesita iniciar sesión para poder añadir productos al carrito.`
        );
  };

  const estilo = {
    height: "20px",
  };

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {vela.categorie}
            </li>
          </ol>
        </nav>
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={vela.imgUrl}
              class="img-fluid rounded-start"
              alt={`imagen de ${vela.name}`}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{vela.name}</h5>
              <p class="card-text">{vela.description}</p>
              <p class="card-text">{`$ ${vela.price}`}</p>
              <p class="card-text">{`Valoración: ${vela.rating}`}</p>
              <p class="card-text">
                <small class="text-muted">{`Quedan solo ${vela.stock} disponibles`}</small>
              </p>

              <div>
                <div className="contador marginbottom" style={estilo}>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={contadorMenos}
                  >
                    <i class="fa-solid fa-minus">-</i>
                  </button>
                  <span> {quantity} </span>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={contadorMas}
                  >
                    <i class="fa-solid fa-plus">+</i>
                  </button>
                </div>

                <div>
                  {quantity > vela.stock ? (
                    <p className="card-text text-danger">
                      <small>{`Solo qeudan ${vela.stock} unidades`}</small>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <button
                    className="btn btn-secondary btn-sm marginbottom"
                    onClick={handleBuy}
                  >
                    AÑADIR AL CARRITO
                  </button>
                </div>
              </div>

              <div>
                <button> 🖤</button>
                <label>Agregar a lista de deseados</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="btn-group">
          <button
            class="btn btn-primary active btn-sm"
            aria-current="page"
            onClick={handlePago}
          >
            Método de pago
          </button>
          <button class="btn btn-primary btn-sm" onClick={handleEnvio}>
            Métodos de Envíos
          </button>
          <br />
        </div>

        {metodoPago ? (
          <div>
            <h3>Métodos de Pago</h3>
            <div class="leftAlign">
              <ul>
                <li>
                  Tarjeta de crédito o débito, de cualquier banco o emisor.
                  Hasta 3 cuotas sin interés con tarjetas emitidas por entidades
                  bancarias.
                </li>
                <li>Por el momento no emitimos factura A en compras Online.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483381045!2d-58.50333862352453!3d-34.61580373601667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1667498620256!5m2!1ses-419!2sar"
                    width="300"
                    height="250"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Google maps"
                  ></iframe>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Métodos de Envíos</h5>
                    <h5 class="card-title">Opciones de envío:</h5>
                    <ul class="leftAlign">
                      <li>
                        <p class="card-text">
                          Envío a domicilio gratis en CABA.
                        </p>
                      </li>
                      <li>
                        <p class="card-text">
                          Envío a domicilio por GBA y resto del país: Recibirás
                          tu pedido entre los 5 y 7 días hábiles luego de su
                          confirmación.
                        </p>
                      </li>
                      <li>
                        <p class="card-text">
                          Retiro por sucursal (Te enviaremos un mail confirmando
                          que tu pedido se encuentra listo para retirar*)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <p></p>
      </div>

      <div>
        <h3>PRODUCTOS RELACIONADOS</h3>
      </div>
    </div>
  );
};

export default ProductCard;
