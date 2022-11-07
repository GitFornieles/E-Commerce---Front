import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    user: userReducer,
    //Cart: cartReducer,
  },
});

export default store;

/*
--------> EJEMPLO:

    const handleAgregar=(e)=>{
        dispatch(agregarproducto(e.target.id))
    }

    const handleremover=(e)=>{
        
        dispatch(removerproducto(e.target.id))
    }





///////////////// carrito.jsx

const carrito= ()=>{

    
    
    return <>
        <button id={product.id} onClick={handleAgregar}>Agregar Producto</button>
        <button id={product.id} onClick={handleAgregar}>Eliminar Producto</button>
    </>
}
*/
