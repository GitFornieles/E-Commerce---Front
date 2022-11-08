import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../store/user";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UserButton = () => {
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
    <>
      {user.admin ? (
        <div className="col-md-4 col-xs-4">
          <div>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.nickname}
                </a>
                <ul class="dropdown-menu dropdown-menu-light">
                  <li>
                    <Link to="/AllUsers">
                      <a class="dropdown-item" onClick={handleLogOut}>
                        Lista de usuarios
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={handleLogOut}>
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="col-md-4 col-xs-4">
          <div>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.nickname}
                </a>
                <ul class="dropdown-menu dropdown-menu-light">
                  <li>
                    <a class="dropdown-item" onClick={handleLogOut}>
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserButton;
