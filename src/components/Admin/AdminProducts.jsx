import React from "react";
import AdminProductCard from "../../commons/AdminProductCard";

const AdminProducts = () => {
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
      <div id="text" className="m-0 row justify-content-center ">
        <div className="bg-danger">
          <h5>Administración de Producto </h5>
        </div>
        <h6> Editar/eliminar producto</h6>
      </div>
      <AdminProductCard />
    </div>
  );
};

export default AdminProducts;
