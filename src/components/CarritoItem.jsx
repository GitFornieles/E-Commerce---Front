import React from "react";
import "../Styles/CarritoItem.css";

const CarritoItem = ({ producto }) => {
  console.log(producto);
  const imgStyles = {
    heigth: "50px",
  };

  return (
    <>
      <tr>
        <td scope="row">
          <img src={producto.mainImage} style={imgStyles} />
        </td>
        <td>{producto.categorie}</td>
        <td>{producto.price}</td>
        <td id="boton">
          <div className="contador marginbottom">
            <button type="button" class="btn btn-outline-secondary ">
              <i className="fa-solid fa-minus"></i>
            </button>
            <span>0</span>
            <button type="button" className="btn btn-outline-secondary ">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CarritoItem;
