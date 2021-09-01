import { generoDTO } from "../../models/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){

    //Generos
    const generosNoSeleccionados: generoDTO[] = [{id:2,nombre:'Drama'}]

    const generosSeleccionados: generoDTO[] = [{id:1,nombre:'Accion'},{id:3,nombre:'Comedia'}]

    return(
        <>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas 
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{titulo:'Spider-Man', enCines:true,trailer:'url', 
                fechaLanzamiento: new Date('2021-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}