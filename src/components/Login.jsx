import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <div className="container">
        <form className="row">
          <div>
            <label>nickName:</label>
            <input
              type="nickName"
              className="form-control"
              id="floatingInput"
              placeholder="Apodo"
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Escribi tu contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
