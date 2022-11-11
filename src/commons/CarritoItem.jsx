import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../Styles/CarritoItem.css";
import { Link } from "react-router-dom";

const CarritoItem = ({ producto,qty,id,handlePlus,handleMinus }) => {
  const imgStyles = {
    heigth: "50px",
  };
  return (
    <>
      <tr>
        <td scope="row">{id}</td>
        <Link to={`../grilla/${producto.id}`} style={{ textDecoration: "none" }}>
        <td>{producto.name}</td>
        </Link>
        <td>{producto.price}</td>
        <td>{producto.stock}</td>
        <td id="boton">
          <div className="contador marginbottom">
            <button id={id} type="button" className="btn btn-outline-secondary" onClick={(e)=>handleMinus(e)}>
              <i id={id} className="fa-solid fa-minus"></i>
            </button>
            <span>{qty}</span>
            <button id={id} type="button" className="btn btn-outline-secondary" onClick={(e)=>handlePlus(e,producto.stock)}>
              <i id={id} className="fa-solid fa-plus"></i>
            </button>
          </div>
        </td>
        <td>{producto.price*qty}</td>
      </tr>
    </>
  );
};

export default CarritoItem;
