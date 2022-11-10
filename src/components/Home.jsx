import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.jpg";
import "../styles/Navbar.css";
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className="dropdown" style={{marginLeft:"40px"}}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </button>
            <ul className="dropdown-menu">
            <Link to="categorie/Velas">
              <li>
                <a className="dropdown-item" href="#">
                  Velas
                </a>
              </li>
              </Link>
              <Link to="categorie/Difusores">
              <li>
                <a className="dropdown-item" href="#">
                Difusores
                </a>
              </li>
              </Link>
              <Link to="categorie/Aromatizadores">
              <li>
                <a className="dropdown-item" href="#">
                Aromatizadores
                </a>
              </li>
              </Link>
              <Link to="categorie/Escencias">
              <li>
                <a className="dropdown-item" href="#">
                Escencias
                </a>
              </li>
              </Link>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
