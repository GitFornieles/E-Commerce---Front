import React from "react";
import GrillaDeProductos from "../GrillaDeProductos";

const AdminProducts = () => {
  return (
    <div>
      <div id="text" className="m-0 row justify-content-center">
        <h5>Administración de Productos </h5>
        <p> Añade, edite y elimine productos.</p>
      </div>
      <GrillaDeProductos />
    </div>
  );
};

export default AdminProducts;
