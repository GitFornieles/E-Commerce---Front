import React from "react";
import Logo from "../img/logo.jpg";
import "../Styles/Navbar.css";
import GrillaDeProductos from "./GrillaDeProductos";

const Home = () => {
  const imgStyles = {
    heigth: "150px",
    width: "150px",
    objectFit: "cover",
    objectPosition: " center",
  };

  return (
    <div>
      <div className="corner-ribbon">
        <div className="corner-ribbon__inner">
          <div className="corner-ribbon__ribbon"></div>
        </div>
        <div id="text" className="m-0 row justify-content-center">
          <h5>SAHUMEROS ARTESANALES </h5>
          <p> Sahumerios suaves y diferentes. Hechos artesanalmente</p>
        </div>
        <div className="m-0 row justify-content-center">
          <img src={Logo} style={imgStyles} alt="logo" />
        </div>
      </div>
      <div className="separator">
        <div className="separator__content"> </div>

        <div className="separator__separator"></div>
      </div>

      <div>
        <GrillaDeProductos />
      </div>
    </div>
  );
};

export default Home;
