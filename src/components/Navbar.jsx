import React from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userLogOut } from "../store/user";
import A from "../img/A.jpg";
import MenuDesplegable from "./MenuDesplegable";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:8000/api/users/logout");

      // Setteo un user vacio:
      dispatch(userLogOut());

      // Vuelvo a la pagina de inicio:
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logonav = {
    width: "4%",
    height: "4%",
    objectPosition: " center",
  };

  return (
    <div>
      <div className="container" class="Difusores">
        DIFUSORES
      </div>
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

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
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
