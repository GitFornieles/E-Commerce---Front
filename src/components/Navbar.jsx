import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

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
            <Link to="/login">
              <button type="button" className="btn btn-secondary btn-sm">
                Login
              </button>
            </Link>
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
    </div>
  );
};

export default Navbar;
