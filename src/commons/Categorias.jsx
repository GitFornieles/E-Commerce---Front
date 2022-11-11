import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Categorias = () => {

const [ categoriaSelected, setCategoriaSelected] = useState([])
const categoria = useLocation().pathname.split("/")[2];

useEffect(() => {
    axios.get(`http://localhost:8000/api/products/categorie/${categoria}`).then((res) => res.data).then((categoria) => setCategoriaSelected(categoria))
}, [categoria])

  return (
    <>
    <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center" }}>

            {categoriaSelected.map((categoria) => ( 
            <div className="card" style={{ width: "25rem" }} key={categoria.id} >
      
              <img src={categoria.mainImage} alt="ACA VA LA FOTO"/>
            
              <div className="card-body" id="cardposition">
                <h5 className="card-title">{categoria.price} $</h5>
                <Link to={`../grilla/${categoria.id}`} style={{textDecoration:"none"}} >
                <p className="card-text" style={{fontSize:"20px"}}> {categoria.name} </p>
                </Link>
                
                <br />
                  <span> STOCK {categoria.stock}</span>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-secondary btn-sm btn-color" id="agregar"
                >
                  <span className="glyphicon glyphicon-shopping-cart" ></span>
                  <b> Agregar </b>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
))}       

</div>
      </>
  )
}

export default Categorias