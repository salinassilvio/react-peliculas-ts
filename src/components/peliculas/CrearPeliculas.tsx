import { generoDTO } from "../../models/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas(){

    //Generos
    const generos: generoDTO[] = [{id:1,nombre:'Accion'}, {id:2,nombre:'Drama'},{id:3,nombre:'Comedia'}]


    return(
        <>
            <h3>Crear Peliculas</h3>
            <FormularioPeliculas 
                generosNoSeleccionados = {generos}
                generosSeleccionados={[]}
                modelo={{titulo:'', enCines:false,trailer:''}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}