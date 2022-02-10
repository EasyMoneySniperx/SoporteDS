import React from 'react'
import Cuadro from './cuadro'
import "./styles/cuadro.css"
import usuario1 from "../imagen/usuario1.png"
import inicio from '../imagen/inicio1.jpg'
import codigobarra1 from '../imagen/codigobarra1.png'
import inventario from '../imagen/inventario.jpg'
import producto1 from '../imagen/producto1.jpg'
import eliminar1 from '../imagen/eliminar1.png'


const cuadros = [
  {
    id: 1,
    title: "controlar mi inventario",
    image: inventario,
    text: "Para controlar tu inventario, solo debes llevar un orden de tus productos, la cantidad que ingresa, la cantidad que se vende, tambien teniendo en cuenta los precios de costo y los precios de venta. Revisar la cantidad en fisico y la cantidad virtual.",
    boton: "Leer mas...",
    funci: function(){  
      document.getElementById("hideText").style.display = "block";
      
    }
    
  },
  {
    id: 2,
    title: "¿Como agregar un producto nuevo?",
    image: producto1,
    text: "Tienes que dirigirte a inventarios y dale a la opcion añadir articulos, debes colocar el nombre, el precio, una descripcion que es opcional y guardarlo, ya esta listo para que puedas facturar el nuevo producto.",
    boton: "Leer mas...",
    funci: function(){
      document.getElementById("hideText").style.display= "none";
      
    }
  },
  {
    id:3,
    title: "¿como crear mi usuario?",
    image: usuario1,
    text: "Para crear un nuevo usuario debes registrate con un correo y una contraseña, se recomienda que sea privada y no compartirla.",
    boton: "Leer mas...",
    funci: function(){
      
      document.getElementById("hideText").style.display = "block";
      
    }
  },
  {
    id:4,
    title: "¿Como elimino un producto?",
    image: eliminar1,
    boton: "Leer mas..."
  },
  {
    id:5,
    title: "¿Puedo utilizar codigo de barras?",
    image: codigobarra1,
    boton: "Leer mas..."
  },
  {
    id:6,
    title: "¿Quieres volver al inicio?",
    image: inicio,
    boton: "Inicio"
  }

]


export default function Cuadros() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'> 
        {
          
          cuadros.map(cuadro => (
            <div className='col-md-4' key={cuadro.id}>
              <Cuadro imageSource={cuadro.image} title ={cuadro.title} text ={cuadro.text} boton ={cuadro.boton} funci={cuadro.funci}/>
             
              </div>
          ))
        }
        
      </div>     
    </div>
  )
}


