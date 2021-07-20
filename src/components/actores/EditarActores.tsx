import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <>Editar Actores</>
      <FormularioActores
        modelo={{ nombre: "Tom Holland", fechaNacimiento: new Date('1996-06-01T:00:00:00') }}
        onSubmit={(valores) => console.log(valores)}
      ></FormularioActores>
    </>
  );
}
