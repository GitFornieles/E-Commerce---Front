import { createAction, createReducer } from "@reduxjs/toolkit";

//Definimos las acciones que puede tener este estado
export const setCart = createAction("SETCART");
export const addProd = createAction("ADDPROD");
export const remProd = createAction("REMPROD");
export const elimProd = createAction("ELIMPROD");
export const vaciar = createAction("VACIAR");
export const cartLogOut = createAction("CARTLOGOUT");

const initialState = JSON.parse(localStorage.getItem("cart")) || { cartId: 0, productos: [],total:0 };

//combinamos todas las acciones en un reducer

const cartReducer = createReducer(initialState, {
  [setCart]: (state, action) => {
    let total=0
    let productos=action.payload.productos
    if(state.productos){
        total=productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total};
  },
  [addProd]: (state, action) => {
    let total=0
    let productos=action.payload.productos
    if(state.productos){
        total=productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total}
  },
  [remProd]: (state, action) => {
    let total=0
    let productos=action.payload.productos
    if(state.productos){
        total=productos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...action.payload,total:total}
  },
  [vaciar]: (state, action) => {
    const newState={...state,productos:[],total:0}
    return newState;
  },
  [cartLogOut]:(state,action)=>{
    localStorage.removeItem("cart");
    return action.payload;
  },
  [elimProd]:(state,action)=>{
    let total=0
    const productId=action.payload
    const newProductos=state.productos.filter(elemento=>elemento.productId!=productId)
    if(newProductos){
        total=newProductos.reduce((acumulador,elemento)=>{
            acumulador=acumulador+elemento.qty*elemento.purchasedPrice
            return acumulador
        },0)
    }
    return {...state,productos:newProductos,total:total}
  }
});

export default cartReducer;
