import { createAction, createReducer } from "@reduxjs/toolkit";

//Definimos las acciones que puede tener este estado
export const userLogin = createAction("LOGIN");
export const userLogOut = createAction("LOGOUT");

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

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => {
    return action.payload;
  },
  [userLogOut]: (state, action) => {
    return initialState;
  },
});

export default userReducer;
