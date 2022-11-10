import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userLogOut } from "../store/user";

const MenuDesplegable = () => {
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
    <div className="btn-group me-2" role="group">
      <button
        type="button"
        className="btn btn-outline-success dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {user.nickname}
      </button>
      <ul class="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Lista de usuarios
          </a>
        </li>
        <li>
          <a className="dropdown-iem" onClick={handleLogOut}>
            Cerrar sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesplegable;
{
  /*
<div className="col-md-4 col-xs-4">
  <h3>{user.nickname}</h3>
  <button
    type="button"
    className="btn btn-primary ml-auto"
    onClick={handleLogOut}
  >
    Log Out
  </button>
</div>;

<div className="dropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-linck dropdown-toggle"
            href=""
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.nickname}
          </a>
          <ul className="dropdown-menu dropdown-menu-light"></ul>
        </li>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Acción
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Otra acción
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Algo más aqui
            </a>
          </li>
          <li>
            <a className="dropdown-iem" onClick={handleLogOut}>
              Log out
            </a>
          </li>
        </ul>
      </ul>
    </div>
*/
}
