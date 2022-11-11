import React from "react";

const ProductoCarrito = ({ producto }) => {

  return (
    <tr>
      <td>
        <img src={producto.product.mainImage} alt="FOTO PRODUCTO" style={{ width: "40%" }}/>
      </td>
      <td>{producto.product.name}</td>
      <td>{producto.qty}</td>
      <td>{producto.purchasedPrice}</td>
      <td>{`$${producto.qty * producto.purchasedPrice}`}</td>
    </tr>
  );
};

export default ProductoCarrito;
