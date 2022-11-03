import React from "react";
import imagen from "../assets/imagen.jpg";
import GrillaDeProductos from "../Styles/GrillaDeProductos"


// este componente va a mostrar la grilla de productos
// el style se obtiene de bootstrap y se customiza para la grilla, se va a crear una hoja de estilo para este componente. Se realiza responsive.
// falta agregar los estados de Redux 
// Se va a agragar funcionalidad de handleclick para los botones de + y - y agregar al carrito 
// hacer axios para la ruta del back y luego hacer MAP para recorrer todos los productos


const GrillaDeProductos = () => {
  return (
    <>
      <div className="row" id="grilla">
        <div className="col-3">
        <div className="card" >
          <img src={imagen} alt="ACA VA LA FOTO" />
          <br />
          <div className="card-body">
            <h5 class="card-title">225$</h5>
            <p className="card-text"> REPUESTO PARA DIFUSOR LIMA </p>
            <div className="contador">
              <button type="button" class="btn btn-primary">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span> 5 </span>
              <button type="button" class="btn btn-primary">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <br />
            <button type="button" class="btn btn-secondary btn-sm btn-color">
              <span class="glyphicon glyphicon-shopping-cart"></span>
              <b> Agregar </b>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            </div>
          </div>
        </div>     

      </div>
    </>
  );
};

export default GrillaDeProductos;
