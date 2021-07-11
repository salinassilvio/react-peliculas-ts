import { pelicula } from "../../models/peliculas.model";
import css from "../../styles/ListadoPeliculas.module.css";

export default function PeliculaIndividual(props: peliculaIndividualProps){
    
    const construirLink = () => `/pelicula/${props.pelicula.id}`
    
    return(
        <div className={css.div}>
            <a href="{construirLink()}">
                <img src={props.pelicula.poster} alt="Poster"></img>
            </a>
            <p>
                <a href="{construirLink()}">{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

//interface
interface peliculaIndividualProps{
    pelicula: pelicula;
}