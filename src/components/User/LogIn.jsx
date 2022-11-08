import React from "react";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";
import { Link } from "react-router-dom";

const Login = () => {
  const userName = useInput("userName");
  const password = useInput("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST user credentials:
      const { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          nickname: userName.value,
          password: password.value,
        }
      );

      // Set userState:
      dispatch(userLogin(data.dataValues));

      // Store the user in localStorage to PERSIST:
      localStorage.setItem("user", JSON.stringify(data.dataValues));

      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUser = () => {
    console.log(user);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm">Home</button>
        </Link>

        <button className="btn btn-secondary btn-sm" onClick={handleUser}>
          USER
        </button>
      </div>

      <h1>Login</h1>

      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
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
        <br />
        <div>
          <Link to="/login/admin">
            <button type="submit" className="btn btn-secondary">
              Iniciar sesión como Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
