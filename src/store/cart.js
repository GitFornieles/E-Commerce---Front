import { createAction, createReducer } from "@reduxjs/toolkit";


//Definimos las acciones que puede tener este estado
export const setCart=createAction("SETCART")
export const agrProd=createAction("AGRPROD")
export const remProd=createAction("REMPROD")
export const vaciar=createAction("VACIAR")
export const pagar=createAction("PAGAR")

const initialState = {numCart:0,products:[]}

//combinamos todas las acciones en un reducer

const userReducer = createReducer(initialState, {
    [setCart]:(state,action)=>{return state},
    [agrProd]:(state,action)=>{return state},
    [remProd]:(state,action)=>{return state},
    [vaciar]:(state,action)=>{return {...state,products:[]}},
    [pagar]:(state,action)=>{return state}
    

});

export default userReducer;
