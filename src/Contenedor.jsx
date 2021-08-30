import React from 'react';
import Personajes from './Personajes';
import Leela from './assets/img/Leela.jpg';
import Philip from './assets/img/Philip J Fry.png';
import Bender from './assets/img/Bender.png';
import Amy from './assets/img/Amy Wong.png';
import Zoidberg from './assets/img/Zoidberg.png';
import Zapp from './assets/img/Zapp Brannigan.png';
import Hermes from './assets/img/Hermes Conrad.jpg';
import Profesor from './assets/img/Profesor.png';
import Nibbler from './assets/img/Nibbler.jpg';
import Morbo from './assets/img/Morbo.png';
import Kif from './assets/img/Kif Kroker.png';

const personajes = [
    {
        "imagen" :  <img src={Leela}/>,
        "nombre" : "Leela",
        "edad" : 25,
        "genero" : "F",
        "raza" : "Mutante",
        "ocupacion" : "Capitana de la nave Planet Express"
    },
    {
        "imagen" :  <img src={Philip}/>,
        "nombre" : "Philip J Fry",
        "edad" : 25,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Repartidor de la Planet Express"
    },
    {
        "imagen" :  <img src={Bender}/>,
        "nombre" : "Bender",
        "edad" : 10,
        "genero" : "Hombrebot",
        "raza" : "Robot",
        "ocupacion" : "Cocinero y sub-gerente de ventas de Planet Express"
    },
    {
        "imagen" :  <img src={Amy}/>,
        "nombre" : "Amy Wong",
        "edad" : 22,
        "genero" : "F",
        "raza" : "Humano",
        "ocupacion" : "Becaria de la empresa de transportes Planet Express"
    },
    {
        "imagen" :  <img src={Zoidberg}/>,
        "nombre" : "Zoidberg",
        "edad" : 86,
        "genero" : "M",
        "raza" : "Decapodiano",
        "ocupacion" : "Medico ocupacional de la empresa de transportes Planet Express"
    },
    {
        "imagen" :  <img src={Zapp}/>,
        "nombre" : "Zapp Brannigan",
        "edad" : 28,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Capitan del Nimbus"
    },
    {
        "imagen" :  <img src={Hermes}/>,
        "nombre" : "Hermes Conrad",
        "edad" : 41,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Ordenar los archivos de la empresa Planet Express"
    },
    {
        "imagen" :  <img src={Profesor}/>,
        "nombre" : "Profesor Hubert Farnsworth",
        "edad" : 159,
        "genero" : "M",
        "raza" : "Humano",
        "ocupacion" : "Cientifico loco, profesor y dueño de Planet Express"
    },
    {
        "imagen" :  <img src={Nibbler}/>,
        "nombre" : "Nibbler",
        "edad" : 4600000000,
        "genero" : "M",
        "raza" : "Extraterrestre",
        "ocupacion" : "Embajador de la Tierra Fuente de la materia oscura de Planet Express"
    },
    {
        "imagen" :  <img src={Morbo}/>,
        "nombre" : "Morbo",
        "edad" : 29,
        "genero" : "M",
        "raza" : "Extraterrestre",
        "ocupacion" : "Reportero del Canal Noticias 2 y conductor de Te Con Los Titanes"
    },
    {
        "imagen" :  <img src={Kif}/>,
        "nombre" : "Kif Kroker",
        "edad" : 24,
        "genero" : "M",
        "raza" : "Anfibio",
        "ocupacion" : "Primer oficial de Nimbus"
    },
]

const Contenedor = () =>(
    <>
        {
            personajes.map( c => <Personajes imagen={ c.imagen } nombre={ c.nombre } edad={c.edad} genero={ c.genero}  raza={ c.raza} ocupacion={ c.ocupacion} /> )
        }
    </>
);

export default Contenedor;
