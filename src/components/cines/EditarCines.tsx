import { cineCreacionDTO, cineDTO } from "../../models/cines.model";
import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoint";
import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <EditarEntidad<cineCreacionDTO, cineDTO>
      url={urlCines}
      urlIndice="/cines"
      nombreEntidad="Cines"
    >
      {(entidad, editar) => (
        <FormularioCines
          modelo={entidad}
          onSubmit={async (valores) => {
            await editar(valores);
          }}
        ></FormularioCines>
      )}
    </EditarEntidad>
  );
}
