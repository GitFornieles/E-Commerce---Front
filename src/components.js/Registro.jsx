import React from "react";

const Registro = () => {
  return (
    <div>
      <h1>Registro</h1>

      <div className="container">
        <form className="row">
          <div>
            <label>dni:</label>
            <input
              type="dni"
              className="form-control"
              id="floatingInput"
              placeholder="Dni"
            />
          </div>
          <div>
            <label>nickName:</label>
            <input
              type="nickName"
              className="form-control"
              id="floatingnickName"
              placeholder="Apodo"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Name"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="lastname"
              className="form-control"
              id="floatingInput"
              placeholder="Apellido"
            />
          </div>
          <div>
            <label>Edad:</label>
            <input
              type="age"
              className="form-control"
              id="floatingInput"
              placeholder="Edad"
            />
          </div>
          <div>
            <label>Direccion:</label>
            <input
              type="address"
              className="form-control"
              id="floatingInput"
              placeholder="Direccion"
            />
          </div>
          <div>
            <label>Ciudad:</label>
            <input
              type="city"
              className="form-control"
              id="floatingInput"
              placeholder="Ciudad"
            />
          </div>
          <div>
            <label>Codigo Postal:</label>
            <input
              type="postalCode"
              className="form-control"
              id="floatingInput"
              placeholder="codigo postal"
            />
          </div>
          <div>
            <label>Telefono:</label>
            <input
              type="cellphone"
              className="form-control"
              id="floatingInput"
              placeholder="Telefono"
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
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
