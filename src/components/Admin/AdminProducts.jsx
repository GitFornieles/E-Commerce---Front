import React from "react";
import AdminProductCard from "../../commons/AdminProductCard";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  return (
    <div>
      <div id="text" className="m-0 row justify-content-center ">
        <div className="bg-danger">
          <h5>Administración de Producto </h5>
        </div>
        <h6> Editar/eliminar producto</h6>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm btn-color">
            {" "}
            ↩ Home{" "}
          </button>
        </Link>
      </div>
      <AdminProductCard />
    </div>
  );
};

export default AdminProducts;
