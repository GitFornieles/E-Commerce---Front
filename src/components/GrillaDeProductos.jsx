import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../styles/GrillaDeProductos.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const GrillaDeProductos = () => {
  
//se crea estado local para llamar a la lista de productos y mostrarlos en la grilla
const [productos, setProductos] = useState([])

//se utiliza useEffect para hacer el pedido axios a la ruta de productos
useEffect(() => {
  axios.get("http://localhost:8000/api/products").then((res) => res.data).then((productos) => setProductos(productos))}, [])


  return (
    <>
    <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center" }}>

            {productos.map((product) => ( 
            <div className="card" style={{ width: "25rem" }} key={product.id} >
      
              <img src={product.mainImage} alt="ACA VA LA FOTO"/>
            
              <div className="card-body" id="cardposition">
                <h5 className="card-title">{product.price} $</h5>
                <Link to={`../grilla/${product.id}`} style={{textDecoration:"none"}} >
                <p className="card-text" style={{fontFamily:"fantasy", fontSize:"20px"}}> {product.name} </p>
                </Link>
                
                <br />
                  <span> STOCK {product.stock}</span>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm btn-color" id="agregar"
                >
                  <span className="glyphicon glyphicon-shopping-cart" ></span>
                  <b> Agregar </b>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
))}       

</div>
      </>
  );
};

export default GrillaDeProductos;







// CONTADOR 

// <div className="contador">
//                   <button type="button" className="btn btn-primary" >
//                   <i className="fa-solid fa-minus"></i>
//                   </button>
//                   <span >  </span>
//                   <button type="button" className="btn btn-primary" >
//                     <i className="fa-solid fa-plus"></i>
//                   </button>
                  
//                 </div>
