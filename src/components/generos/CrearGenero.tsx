import axios from "axios";
import { useHistory } from "react-router";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model";
import { urlGeneros } from "../utils/endpoint";
import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {

  const history = useHistory();

  async function crear(genero:generoCreacionDTO) {
    try{
      await axios.post(urlGeneros,genero);
      history.push('/generos');
    }catch(error){
      console.error(error);
    }
  }

  return (
    <>
      <h3>Crear Genero Contenido</h3>

      <FormularioGeneros
        modelo ={{nombre:''}}
        onSubmit={async (valores) =>{
            await crear(valores);
        }}
      ></FormularioGeneros>
    </>
  );
}
