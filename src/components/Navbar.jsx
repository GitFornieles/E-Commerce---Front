import React from "react";
import Logo from "../img/logo.jpg";
import "../styles/Navbar.css";




import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userLogOut } from "../store/user";


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

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <>
            {user.name ? (
              <div className="col-md-4 col-xs-4">
                <h3>{user.nickname}</h3>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
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
            )}
          </>

          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
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
