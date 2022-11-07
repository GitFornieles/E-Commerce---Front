import React, { useState } from "react";
import axios from "axios";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import userLogin from "../store/user";

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
      const { data } = await axios.post("/api/login", {
        userName: userName.value,
        password: password.value,
      });

      // Set userState:
      dispatch(userLogin(data));

      // Store the user in localStorage to PERSIST:
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect to home page
      navigate("/");
    } catch {}
  };

  console.log(user);

  return (
    <div>
      <h1>Login</h1>

      <div className="container">
        <form className="row">
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
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;