import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { actorCreacionDTO } from "../../models/actores.model";
import { urlActores } from "../utils/endpoint";
import { convertirActorAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioActores from "./FormularioActores";

export default function CrearActores() {
  const [errores, setErrores] = useState<string[]>([]);
  const history = useHistory();

  async function crear(actor: actorCreacionDTO) {
    try {
      const formData = convertirActorAFormData(actor);
      await axios({
        method: "POST",
        url: urlActores,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push("/actores");
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <>Crear Actores</>
      <MostrarErrores errores={errores}></MostrarErrores>
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={async (valores) => await crear(valores)}
      ></FormularioActores>
    </>
  );
}
