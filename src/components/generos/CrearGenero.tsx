import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {
  return (
    <>
      <h3>Crear Genero Contenido</h3>

      <FormularioGeneros
        modelo ={{nombre:''}}
        onSubmit={async (valores) =>{
          await new Promise(r => setTimeout(r,3000))
          console.log(valores);
        }}
      ></FormularioGeneros>
    </>
  );
}
