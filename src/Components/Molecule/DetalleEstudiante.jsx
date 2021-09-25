import React from "react";
import { Link } from "react-router-dom";

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


const DetalleEstudiante= ({match, location, history}) => {

    console.log(history)

    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <>
            {
                estudiante ? (
                    <div className="card col-md-4" >
                        <div className="card-body">
                            <h5 className="card-title">{ estudiante.nombre }</h5>
                            <p className="card-text">Edad: { estudiante.edad }</p>
                            <p className="card-text">Genero: { estudiante.genero }</p>
                            <p className="card-text">Grado: { estudiante.grado }</p>
                        </div>
                    </div>
                ):
                <h1>Estudiante no encontrado</h1>
            }

            <Link to={`/estudiantes`}>Ver Todos</Link>
        </>
    )
};

export default DetalleEstudiante;