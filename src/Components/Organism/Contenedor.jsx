import React from 'react';
import Estudiante from '../Molecule/Estudiante';

const estudiantes = [
    {
        "id": 1,
        "grado": 10,
        "edad" : 23,
        "genero" : "F"
    },
    {
        "id": 2,
        "grado": 10,
        "nombre" : "juan",
        "edad" : 22,
        "genero" : "M"
    },
    {
        "id": 3,
        "grado": 10,
        "nombre" : "juana",
        "edad" : 13,
        "genero" : "F"
    },
    {
        "id": 4,
        "grado": 10,
        "nombre" : "mario",
        "edad" : 10,
        "genero" : "M"
    },
    {
        "id": 5,
        "grado": 10,
        "nombre" : "luis",
        "edad" : 89,
        "genero" : "M"
    },
    {
        "id": 6,
        "grado": 10,
        "nombre" : "cris",
        "edad" : 3,
        "genero" : "F"
    },
    {
        "id": 7,
        "grado": 10,
        "nombre" : "paola",
        "edad" : 18,
        "genero" : "F"
    },
]

const Contenedor = () =>(
    <>
        {
            estudiantes.map( c => <Estudiante nombre={ c.nombre } edad={c.edad} genero={ c.genero} id = {c.id} /> )
        }
    </>
);

export default Contenedor;