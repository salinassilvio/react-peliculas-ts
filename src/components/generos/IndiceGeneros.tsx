import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generoDTO } from "../../models/generos.model";
import { urlGeneros } from "../utils/endpoint";

export default  function IndiceGeneros(){

    useEffect(() => {
       axios.get(urlGeneros)
       .then((respuesta: AxiosResponse<generoDTO[]>) => {
           console.log(respuesta.data);
       })
    }, [])

    return (
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>
        </>
    )
}