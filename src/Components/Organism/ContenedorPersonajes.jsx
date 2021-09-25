import React from 'react';
import Personajes from '../Molecule/Personajes';

const personajes = [
    {
        
        "id": 1,
        "nombre" : "Leela",
        "edad" : 25,
        "genero" : "F",
        "raza" : "Mutante",
        "ocupacion" : "Capitana de la nave Planet Express"
    },
    {
        
        "id": 2,
        "nombre" : "Philip J Fry",
        "edad" : 25,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Repartidor de la Planet Express"
    },
    {
        
        "id": 3,
        "nombre" : "Bender",
        "edad" : 10,
        "genero" : "Hombrebot",
        "raza" : "Robot",
        "ocupacion" : "Cocinero y sub-gerente de ventas de Planet Express"
    },
    {
       
        "nombre" : "Amy Wong",
        "id": 4,
        "edad" : 22,
        "genero" : "F",
        "raza" : "Humano",
        "ocupacion" : "Becaria de la empresa de transportes Planet Express"
    },
    {
        
        "id": 5,
        "nombre" : "Zoidberg",
        "edad" : 86,
        "genero" : "M",
        "raza" : "Decapodiano",
        "ocupacion" : "Medico ocupacional de la empresa de transportes Planet Express"
    },
    {
        
        "id": 6,
        "nombre" : "Zapp Brannigan",
        "edad" : 28,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Capitan del Nimbus"
    },
    {
        "id": 7,
        "nombre" : "Hermes Conrad",
        "edad" : 41,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Ordenar los archivos de la empresa Planet Express"
    },
    {
        
        "id": 8,
        "nombre" : "Profesor Hubert Farnsworth",
        "edad" : 159,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Cientifico loco, profesor y dueño de Planet Express"
    },
    {
        
        "id": 9,
        "nombre" : "Nibbler",
        "edad" : 4600000000,
        "genero" : "M",
        "raza" : "Extraterrestre",
        "ocupacion" : "Embajador de la Tierra Fuente de la materia oscura de Planet Express"
    },
    {
        
        "id": 10,
        "nombre" : "Morbo",
        "edad" : 29,
        "genero" : "M",
        "raza" : "Extraterrestre",
        "ocupacion" : "Reportero del Canal Noticias 2 y conductor de Te Con Los Titanes"
    },
    {
       
        "id": 11,
        "nombre" : "Kif Kroker",
        "edad" : 24,
        "genero" : "M",
        "raza" : "Anfibio",
        "ocupacion" : "Primer oficial de Nimbus"
    },
]
const ContenedorPersonajes = () =>(
    <>
        {
            personajes.map( c => <Personajes imagen={ c.imagen } nombre={ c.nombre } edad={c.edad} genero={ c.genero}  raza={ c.raza} ocupacion={ c.ocupacion} id = {c.id}/> )
        }
    </>
);

export default ContenedorPersonajes;
