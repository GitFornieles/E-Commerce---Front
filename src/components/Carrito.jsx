import React from "react";
import CarritoItem from "./CarritoItem";

const Carrito = () => {
  const vela = [
    {
      name: "Aromatizador de Ambiente Coco y Lima",
      mainImage:
        "https://www.vzlivesimply.com/wp/wp-content/uploads/2018/12/DSC_6524-Editar.jpg",
      categorie: "Aromatizantes",
      description:
        "Aromatizante de ambiente en spray que por su aroma dulce e intenso, formado por la combinación de coco y lima, posibilita crear un ambiente propicio para reducir los niveles de stress.",
      cost: 500,
      price: 1900,
      stock: 4,
      rating: 3,
    },
    {
      name: "Combo Full Verbena",
      mainImage:
        "https://www.vzlivesimply.com/wp/wp-content/uploads/2020/06/COMBO-VERBENA-21-scaled.jpg",
      categorie: "Aromatizantes",
      description:
        "El Combo perfecto para aromatizar los ambientes con la deliciosa fragancia de la verbena. Su aroma cítrico perfuma y brinda frescura.",
      cost: 3000,
      price: 6900,
      stock: 5,
      rating: 3,
    },
    {
      name: "Aromatizador de Ambiente This Is Love",
      mainImage:
        "https://www.vzlivesimply.com/wp/wp-content/uploads/2018/12/DSC_6667-Editar.jpg",
      categorie: "Aromatizantes",
      description:
        "Su fragancia estimulante y refrescante induce a un estado de ánimo reconfortante y vivificante. Es el complemento ideal para intensificar la fragancia del difusor This is Love.",
      cost: 800,
      price: 2750,
      stock: 3,
      rating: 4,
    },
    {
      name: "Aromatizador de Ambiente Amate",
      mainImage:
        "https://www.vzlivesimply.com/wp/wp-content/uploads/2018/12/DSC_8993-Editar-2.jpg",
      categorie: "Aromatizantes",
      description:
        "Aromatiza el ambiente con una fragancia herbal y cítrica, su perfume fresco e intenso. Ideal para vaporizar en los ambientes y conectarnos con la naturaleza para sentirnos en armonía.",
      cost: 900,
      price: 2540,
      stock: 10,
      rating: 2,
    },
  ];

  //console.log(vela);
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {vela.map((producto) => {
            return <CarritoItem producto={producto} key={producto.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Carrito;
