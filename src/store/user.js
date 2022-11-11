import { createAction, createReducer } from "@reduxjs/toolkit";

//Definimos las acciones que puede tener este estado
export const userLogin = createAction("LOGIN");
export const userLogOut = createAction("LOGOUT");

// Constante que chequea si hay algun usuario guardado en el localStorage:
const storedUser = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  dni: "",
  nickName: "",
  email: "",
  name: "",
  lastname: "",
  edad: "",
  direccion: "",
  ciudad: "",
  postal: "",
  telefono: "",
  pass: "",
};

//combinamos todas las acciones en un reducer

const userReducer = createReducer(storedUser, {
  [userLogin]: (state, action) => action.payload,
  [userLogOut]: (state, action) => {
    // Vacio el localStorage:
    localStorage.removeItem("user");

    return {};
  },
});

export default userReducer;
