import { Link } from "react-router-dom";
import { cineDTO } from "../../models/cines.model";
import { urlCines } from "../utils/endpoint";
import IndiceEntidad from "../utils/IndiceEntidad";

export default function IndiceCines() {
  return (
    <>
      <IndiceEntidad<cineDTO>
        url={urlCines}
        urlCrear="cines/crear"
        titulo="Cines"
        nombreEntidad="Cine"
      >
        {(cines, botones) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {cines?.map((cine) => (
                <tr key={cine.id}>
                  <td>{botones(`cines/editar/${cine.id}`, cine.id)}</td>
                  <td>{cine.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
      <h3>Indice Cines</h3>
      <Link to="cines/crear">Crear Cines</Link>
    </>
  );
}
