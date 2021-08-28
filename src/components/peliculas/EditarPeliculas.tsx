import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){
    return(
        <>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas 
                modelo={{titulo:'Spider-Man', enCines:true,trailer:'url', 
                fechaLanzamiento: new Date('2021-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}