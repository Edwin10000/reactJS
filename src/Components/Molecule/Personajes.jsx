import React from 'react';
import PropTypes from 'prop-types';


const Personajes = ({imagen,nombre, edad, genero,raza,ocupacion, id}) => (
    <>
        <div className="card col-md-4" >
            <div className="card-body">
            <p className="image">Imagen: { imagen }</p>
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">Edad: { edad }</p>
                <p className="card-text">Genero: { genero }</p>
                <p className="card-text">Raza: { raza }</p>
                <p className="card-text">Ocupacion: { ocupacion }</p>
                <p><a href={`/personajes/${id}`}>Detalle</a></p>
            </div>
        </div>
    </>
);

Personajes.propTypes = {
    imagen: PropTypes.symbol,
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    raza: PropTypes.string,
    ocupacion: PropTypes.string
}

Personajes.defaultProps = {
    nombre: "nombre no asignado",
    edad: 0,
    raza: "no identificado"
}

export default Personajes;