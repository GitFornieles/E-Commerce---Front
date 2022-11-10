import React, { useState } from "react";
import axios from "axios";
import "../Styles/ProductCard.css";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useInput } from "../hooks/useInput";

const AdminProductCard = () => {
  const [productos, setProductos] = useState({});
  const productId = useLocation().pathname.split("/")[3];
  const navigate = useNavigate();

  // const [titulo, setTitulo] = useState(productos.name);

  // Constantes a editar:
  const title = useInput("title");
  const description = useInput("description");
  const price = useInput("price");
  const img = useInput("img");

  // Renderizo el producto especifico:
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${productId}`)
      .then((res) => res.data)
      .then((productos) => setProductos(productos));
  }, []);

  // Funcionalidad del boton EDITAR:
  const confirmEdit = () => {
    axios
      .put(`http://localhost:8000/api/products/${productId}`, {
        name: title.value || productos.name,
        description: description.value || productos.description,
        price: price.value || productos.price,
        mainImage: img.value || productos.mainImage,
      })
      .then(() => alert("Producto editado con éxito!"))
      .then(() => navigate("/"));
  };

  // Funcionalidad del boton ELIMINAR (eliminar productos):
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then(() => alert("Producto eliminado correctamente!"))
      .then(() => navigate("/"));
  };

  return (
    <div>
      <div id="alinearcard">
        <div className="card mb-3" style={{ width: "70%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={productos.mainImage}
                className="img-fluid round-start"
              />
            </div>
            <div className="col-md-8" id="cardindividual">
              <div className="card-body">
                <div>
                  <label>Nombre de Producto: </label>
                  <input placeholder={productos.name} {...title} />
                </div>
                <br />

                <div>
                  <label>Descripción:</label>
                  <textarea
                    class="form-control"
                    placeholder={productos.description}
                    {...description}
                  />
                  <br />
                </div>

                <div>
                  <label>Precio:</label>
                  <input placeholder={productos.price} {...price} />
                </div>

                <br />

                <div>
                  <label>Añadir Imagen:</label>
                  <input placeholder="URL de imagen" {...img} />
                </div>

                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="p-2">
                    <button
                      type="button"
                      className="btn btn-success btn-sm btn-color"
                      onClick={confirmEdit}
                    >
                      <b> EDITAR </b>
                    </button>
                  </div>

                  <div className="p-2">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm btn-color"
                      onClick={deleteProduct}
                    >
                      <b> ELIMINAR </b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
