import IndiceGeneros from "./components/generos/IndiceGeneros";
import EditarGenero from "./components/generos/EditarGenero";
import CrearGenero from "./components/generos/CrearGenero";

import IndiceActores from "./components/actores/IndiceActores";
import EditarActores from "./components/actores/EditarActores";
import CrearActores from "./components/actores/CrearActores";

import IndiceCines from "./components/cines/IndiceCines";
import EditarCines from "./components/cines/EditarCines";
import CrearCines from "./components/cines/CrearCines";
import LandingPage from "./components/peliculas/LandingPage";

import CrearPeliculas from "./components/peliculas/CrearPeliculas";
import EditarPeliculas from "./components/peliculas/EditarPeliculas";
import FiltroPeliculas from "./components/peliculas/FiltroPeliculas";
import RedireccionarALanding from "./components/utils/RedireccionarALanding";


const rutas = [
    {path: '/generos/crear',componente:CrearGenero},
    {path: '/generos/editar/:id(\\d+)',componente:EditarGenero},
    {path: '/generos',componente:IndiceGeneros, exact:true},
    
    {path: '/actores/crear',componente:CrearActores},
    {path: '/actores/editar/:id(\\d+)',componente:EditarActores},
    {path: '/actores',componente:IndiceActores, exact:true},
    
    {path: '/cines/crear',componente:CrearCines},
    {path: '/cines/editar/:id(\\d+)',componente:EditarCines},
    {path: '/cines',componente:IndiceCines,exact: true},

    {path: '/peliculas/crear',componente:CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)',componente:EditarPeliculas},
    {path: '/peliculas/filtrar',componente:FiltroPeliculas, exact:true},

    {path: '/',componente:LandingPage, exact: true},
    {path: '*',componente:RedireccionarALanding}

];

export default rutas;