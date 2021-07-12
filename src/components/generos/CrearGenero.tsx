import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero() {
  return (
    <>
      <h3>Crear Genero Contenido</h3>

      <Formik
        initialValues={{
          nombre: "Accion",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string().required("Este campo es requerido"),
        })}
      >
        <Form>
        <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre genero"></FormGroupText>
          <Button type="submit">Salvar</Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      </Formik>
    </>
  );
}
