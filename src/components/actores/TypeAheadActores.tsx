import { listenerCount } from "process";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorPeliculaDTO } from "../../models/actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps){
    
    const actores: actorPeliculaDTO[] = [
        { id: 1, nombre:'Silvio', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX214_CR0,0,214,317_AL_.jpg' },
        { id: 2, nombre:'Jose', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_UY317_CR130,0,214,317_AL_.jpg' },
        { id: 3, nombre:'Logan', personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg' }   
    ]

    const seleccion : actorPeliculaDTO[] = []

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores,actores[0]]);
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={
                    actor => (
                        <>
                            <img alt="imagen actor" src={actor.foto}
                                style={{
                                    height:'64px',
                                    marginRight:'10px',
                                    width:'64px'
                                }}
                            />
                            <span>{actor.nombre}</span>
                        </>
                    )
                }
            ></Typeahead>
            <ul className="list-group">
                {props.actores.map(actor => <li 
                className="list-group-item list-group-item-action"
                key={actor.id}>
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-primary badge-pill pointer"
                        style={{marginLeft:'0.5rem'}}
                        onClick={() => props.onRemove(actor)}
                    >
                        x
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO):ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}