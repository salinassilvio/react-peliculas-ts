import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model";
import { urlGeneros } from "../utils/endpoint";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {

  const history = useHistory();
  const [errores, setErrores] = useState<string[]>([]);

  async function crear(genero:generoCreacionDTO) {
    try{
      await axios.post(urlGeneros,genero);
      history.push('/generos');
    }catch(error){
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Crear Genero Contenido</h3>
      <MostrarErrores errores={errores}></MostrarErrores>
      <FormularioGeneros
        modelo ={{nombre:''}}
        onSubmit={async (valores) =>{
            await crear(valores);
        }}
      ></FormularioGeneros>
    </>
  );
}
