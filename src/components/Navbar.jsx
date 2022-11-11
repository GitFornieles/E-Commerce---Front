import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import A from "../img/A.jpg";
import MenuDesplegable from "./MenuDesplegable";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const logonav = {
    width: "4%",
    height: "4%",
    objectPosition: " center",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <img
            src={A}
            alt="Logo"
            style={logonav}
            className="d-inline-block align-text-top"
          />

          <div
            className="collapse navbar-collapse p-2"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                {user.name ? (
                  <MenuDesplegable />
                ) : (
                  <div className="btn-toolbar">
                    <div className="btn-group me-2" role="group">
                      <Link to="/login">
                        <button
                          className="btn btn-outline-success"
                          type="loggin"
                        >
                          <ion-icon name="log-in-outline"></ion-icon>
                        </button>
                      </Link>
                    </div>

                    <div className="btn-group me-2" role="group">
                      <Link to="/register">
                        <button
                          className="btn btn-outline-success"
                          type="loggin"
                        >
                          <ion-icon name="reader-outline"></ion-icon>
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            </ul>

            <div className="dropdown" style={{ marginRight: "600px" }}>
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
                <Link to="/">
                  <li>
                    <a className="dropdown-item" href="#">
                      Todos
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <Link to="/">
              <button className="btn btn-secondary" style={{marginRight: "20px"}}>Home</button>
            </Link>
            <form className="d-flex" role="search">
              <Link to="/carrito">
                <button className="btn btn-outline-success" type="carrito">
                  <ion-icon name="cart-sharp"></ion-icon>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
