import React from "react";
import axios from "axios";
import "../../Styles/ProductCard.css";
import { useNavigate } from "react-router";
import { useInput } from "../../hooks/useInput";

const AddProducts = () => {
  const navigate = useNavigate();

  // Propiedades del modelo a agregar:
  const title = useInput("title");
  const description = useInput("description");
  const price = useInput("price");
  const img = useInput("img");
  const stock = useInput("stock");
  const categorie = useInput("categorie");
  const cost = useInput("cost");

  // Funcionalidad del boton AGREGAR PRODUCTO:
  const handleAdd = () => {
    axios
      .put(`http://localhost:8000/api/products/add`, {
        name: title.value,
        description: description.value,
        price: Number(price.value),
        mainImage: img.value,
        stock: Number(stock.value),
        categorie: categorie.value,
        cost: Number(cost.value),
      })
      .then(() => alert("Producto agregado con éxito!"))
      .then(() => navigate("/"));
  };

  return (
    <div>
      <div id="alinearcard">
        <div className="card mb-3" style={{ width: "50%" }}>
          <div className="row g-0">
            <div className="col-md-8" id="cardindividual">
              <div className="card-body">
                <div>
                  <label>Nombre de Producto: </label>
                  <input {...title} />
                </div>
                <br />

                <div>
                  <label>Descripción:</label>
                  <textarea class="form-control" {...description} />
                </div>
                <br />

                <div>
                  <label>Categoría:</label>
                  <input {...categorie} />
                </div>

                <br />

                <div>
                  <label>Precio:</label>
                  <input {...price} />
                </div>

                <br />

                <div>
                  <label>Costo:</label>
                  <input {...cost} />
                </div>

                <br />

                <div>
                  <label>Stock:</label>
                  <input {...stock} />
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
                      onClick={handleAdd}
                    >
                      <b> AGREGAR PRODUCTO</b>
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

export default AddProducts;
