import React from "react";
import Logo from "../img/logo.jpg";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const imgStyles = {
    heigth: "150px",
    width: "150px",
    objectFit: "cover",
    objectPosition: " center",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="col-md-4 col-xs-4">
            <Link to="/register">
              <button type="button" className="btn btn-primary btn-sm">
                Registro
              </button>
            </Link>
            <button type="button" className="btn btn-secondary btn-sm">
              Login
            </button>
          </div>
          <div className="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button>
            <ion-icon name="cart-sharp"></ion-icon>
          </button>
        </div>
      </nav>
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
    </div>
  );
};

export default Navbar;
