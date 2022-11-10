import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const [users, setUsers] = useState([]);

  const [dni, setDni] = useState([]);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [edad, setEdad] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const [postal, setPostal] = useState([]);
  const [telefono, setTel] = useState([]);
  const [pass, setPass] = useState([]);

  const navigate = useNavigate();

  const handleChangeDni = (e) => {
    setDni(e.target.value);
  };
  const handleChangesetNickName = (e) => {
    setNickName(e.target.value);
  };
  const handleChangesetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangesetName = (e) => {
    setName(e.target.value);
  };
  const handleChangesetLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangesetEdad = (e) => {
    setEdad(e.target.value);
  };
  const handleChangesetDireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handleChangesetCiudad = (e) => {
    setCiudad(e.target.value);
  };
  const handleChangesetPostal = (e) => {
    setPostal(e.target.value);
  };
  const handleChangesetTel = (e) => {
    setTel(e.target.value);
  };
  const handleChangesetPass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios

      .post("http://localhost:8000/api/users/new", {
        dni: dni,
        nickname: nickName,
        email: email,
        name: name,
        lastname: lastname,
        age: edad,
        address: direccion,
        city: ciudad,
        postalCode: postal,
        password: pass,
        cellphone: telefono,
      })
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        setUsers(user);
      })
      .then(() => navigate("/login"));
  };
  return (
    <div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm">Home</button>
        </Link>
      </div>

      <h1>Registro</h1>
      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              value={name}
              onChange={handleChangesetName}
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Name"
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              value={lastname}
              onChange={handleChangesetLastName}
              type="lastname"
              className="form-control"
              id="floatingLastName"
              placeholder="Apellido"
            />
          </div>
          <div>
            <label>Nombre de Usuario:</label>
            <input
              value={nickName}
              onChange={handleChangesetNickName}
              type="nickname"
              className="form-control"
              id="floatingnickName"
              placeholder="Apodo"
            />
          </div>
          <div>
            <label>D.N.I:</label>
            <input
              value={dni}
              onChange={handleChangeDni}
              type="dni"
              className="form-control"
              id="floatingDni"
              placeholder="Dni"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              value={email}
              onChange={handleChangesetEmail}
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
          </div>

          <div>
            <label>Edad:</label>
            <input
              value={edad}
              onChange={handleChangesetEdad}
              type="age"
              className="form-control"
              id="floatingAge"
              placeholder="Edad"
            />
          </div>
          <div>
            <label>Dirección:</label>
            <input
              value={direccion}
              onChange={handleChangesetDireccion}
              type="address"
              className="form-control"
              id="floatingDireccion"
              placeholder="Dirección"
            />
          </div>
          <div>
            <label>Ciudad:</label>
            <input
              value={ciudad}
              onChange={handleChangesetCiudad}
              type="city"
              className="form-control"
              id="floatingCiudad"
              placeholder="Ciudad"
            />
          </div>
          <div>
            <label>Código Postal:</label>
            <input
              value={postal}
              onChange={handleChangesetPostal}
              type="postalCode"
              className="form-control"
              id="floatingPostal"
              placeholder="Código Postal"
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              value={telefono}
              onChange={handleChangesetTel}
              type="cellphone"
              className="form-control"
              id="floatingTelefono"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <label>Contraseña (mínimo 8 caracteres):</label>

            <input
              value={pass}
              onChange={handleChangesetPass}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
