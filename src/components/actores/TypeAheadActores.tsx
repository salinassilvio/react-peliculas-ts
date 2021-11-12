import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "../../models/actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps){
    
    const actores: actorPeliculaDTO[] = [
        { id: 1, nombre:'Silvio', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX214_CR0,0,214,317_AL_.jpg' },
        { id: 2, nombre:'Jose', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_UY317_CR130,0,214,317_AL_.jpg' },
        { id: 3, nombre:'Logan', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg' }   
    ]

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor);
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
            ></Typeahead>
        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
}