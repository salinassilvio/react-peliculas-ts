import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model";
import Button from "../utils/Button";
import { urlGeneros } from "../utils/endpoint";
import ListadoGenerico from "../utils/ListadoGenerico";
import Paginacion from "../utils/Paginacion";

export default function IndiceGeneros() {
  const [generos, setGeneros] = useState<generoDTO[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    axios
      .get(urlGeneros, {
        params: { pagina, recordsPorPagina },
      })
      .then((respuesta: AxiosResponse<generoDTO[]>) => {
        console.log(respuesta.headers["cantidadtotalregistro"]);
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistro"],
          10
        );
        console.error(["AQUI", totalDeRegistros]);

        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));
        console.log(respuesta.data);
        setGeneros(respuesta.data);
      });
  }, [pagina, recordsPorPagina]);

  return (
    <>
      <h3>Géneros</h3>
      <Link className="btn btn-primary" to="generos/crear">
        Crear Genero
      </Link>

      <div className="form-group" style={{ width: "150px" }}>
        <label>Registros por página:</label>
        <select
          className="form-control"
          defaultValue={10}
          onChange={(e) => {
            setPagina(1);
            setRecordsPorPagina(parseInt(e.currentTarget.value, 10));
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <Paginacion
        cantidadTotalDePaginas={totalDePaginas}
        paginaActual={pagina}
        onChange={(nuevaPagina) => setPagina(nuevaPagina)}
      ></Paginacion>

      <ListadoGenerico listado={generos}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {generos?.map((genero) => (
              <tr key={genero.id}>
                <td>
                  <Link className="btn btn-success" to={`/genero/${genero.id}`}>
                    Editar
                  </Link>
                  <Button className="btn btn-danger">Borrar</Button>
                </td>
                <td>{genero.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListadoGenerico>
    </>
  );
}
