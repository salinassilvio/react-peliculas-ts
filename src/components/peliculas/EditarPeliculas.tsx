import { cineDTO } from "../../models/cines.model";
import { generoDTO } from "../../models/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){

    //Generos
    const generosNoSeleccionados: generoDTO[] = [{id:2,nombre:'Drama'}]

    const generosSeleccionados: generoDTO[] = [{id:1,nombre:'Accion'},{id:3,nombre:'Comedia'}]

    //Cines
    const cinesSeleccionados: cineDTO[] = [{id: 1, nombre:'Cinemark'}]

    const cinesNoSeleccionados: cineDTO[] = [{id:2, nombre:'Cinemas'}]
    return(
        <>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas 
                cinesNoSeleccionado={cinesNoSeleccionados}
                cinesSeleccionado ={cinesSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{titulo:'Spider-Man', enCines:true,trailer:'url', 
                fechaLanzamiento: new Date('2021-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}