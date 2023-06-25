import React from 'react';
import '../stylesheet/testimonio.css'


function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className='imagen-testimonio' src={require(`../imagenes-freecoder/${props.imagen}.png`)} alt={props.nombre}/>
      <div className='contenedor-texto'>
        <p className='nombre'>
        <b>{props.nombre}</b> en {props.pais}</p>
        <p className='cargo'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'>"{props.testimonio}<b>{props.testimonioImp}</b>{props.testimonioCont}"</p>
       

      </div>
      
    </div>
  )
}

export default Testimonio;
