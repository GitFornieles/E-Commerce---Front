import { createAction, createReducer } from "@reduxjs/toolkit";

//Definimos las acciones que puede tener este estado
export const setCart = createAction("SETCART");
export const addProd = createAction("ADDPROD");
export const remProd = createAction("REMPROD");
export const vaciar = createAction("VACIAR");

const initialState = { cartId: 0, productos: [],total:0 };

//combinamos todas las acciones en un reducer

const cartReducer = createReducer(initialState, {
  [setCart]: (state, action) => {
    let total=0
    if(state.productos){
        total=state.productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total};
  },
  [addProd]: (state, action) => {
    let total
    if(state.productos){
        total=state.productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total}
  },
  [remProd]: (state, action) => {
    let total
    if(state.productos){
        total=state.productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total}
  },
  [vaciar]: (state, action) => {
    localStorage.removeItem("cart");
    return action.payload;
  },
});

export default cartReducer;
