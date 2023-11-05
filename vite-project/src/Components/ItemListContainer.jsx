import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (category) {
          // Filtrar productos por categoría si se proporciona una categoría en los parámetros.
          const productosFiltrados = data.filter((producto) => producto.category === category);
          setProductos(productosFiltrados);
        } else {
          setProductos(data);
        }
      });
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;




// import React, { useEffect, useState } from 'react'
// import ItemList from './ItemList'
// import { useParams } from 'react-router-dom'

// function ItemListContainer() {
//   const [productos, setProductos] = useState([])
//   const { category } = useParams()


//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((respuesta) => respuesta.json())
//       .then((data) => setProductos(data));
//   }, []);

//   return (
//     <div>
//       <ItemList productos={productos} />
//     </div>
//   );
// }

// export default ItemListContainer;





// import { useState, useEffect } from "react"
// import productos from "../data/productos.json"
// import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"

// const ItemListContainer = () => {

//   const [productos, setProductos] = useState([])
//   const [titulo, setTitulo] = useState("Productos")
//   const category = useParams().category

//   const pedirProductos = () => {
//     return new Promise((resolve, reject) => {
//       resolve(productos)
//     })
//   }

//   useEffect(() => {
    
//   pedirProductos()
//   .then((respuesta) => {
//     if (category) {
//       const productosFiltrados = respuesta.filter((prod) => prod.category === category)
//       console.log("Productos filtrados:", productosFiltrados)
//       setProductos(productosFiltrados)
//       setTitulo(category)
//     } else {
//       console.log("Mostrar todos los productos")
//       setProductos(respuesta)
//       setTitulo("Productos")
//     }
//   })

//   }, [category])
  
//   return (
//     <div>
//       <ItemList productos={productos} titulo={titulo}/>
//     </div>
//   )

// }

// export default ItemListContainer
 