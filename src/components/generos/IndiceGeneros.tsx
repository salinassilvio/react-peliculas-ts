import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model";
import Button from "../utils/Button";
import { urlGeneros } from "../utils/endpoint";
import ListadoGenerico from "../utils/ListadoGenerico";

export default  function IndiceGeneros(){

    const [generos,setGeneros] = useState<generoDTO[]>();

    useEffect(() => {
       axios.get(urlGeneros)
       .then((respuesta: AxiosResponse<generoDTO[]>) => {
           console.log(respuesta.data);
           setGeneros(respuesta.data);
       })
    }, [])

    return (
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>

            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => 
                            <tr key={genero.id}>
                                <td>
                                    <Link className="btn btn-success" to={`/genero/${genero.id}`}>
                                        Editar
                                    </Link>
                                    <Button className="btn btn-danger">Borrar</Button>
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </ListadoGenerico>
        </>
    )
}