import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

const AdminLogIn = () => {
  const userName = useInput("userName");
  const password = useInput("password");

  return (
    <div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm">Home</button>
        </Link>
      </div>

      <h1>Admin Login</h1>

      <div className="container">
        <form className="row">
          <div>
            <label>Nombre de Admin:</label>
            <input
              type="nickName"
              className="form-control"
              id="floatingInput"
              placeholder="Apodo"
              {...userName}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Escribi tu contraseña"
              {...password}
            />
            <br />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogIn;
